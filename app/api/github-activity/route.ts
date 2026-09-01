type ContributionDay = {
  contributionCount: number;
  date: string;
};

type GitHubResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: {
            contributionDays: ContributionDay[];
          }[];
        };
      };
    };
  };
  errors?: {
    message: string;
  }[];
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSvg(
  username: string,
  days: ContributionDay[],
  totalContributions: number
) {
  const width = 900;
  const height = 300;

  const paddingLeft = 55;
  const paddingRight = 35;
  const paddingTop = 55;
  const paddingBottom = 50;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const background = "#1a1b27";
  const textColor = "#70a5fd";
  const lineColor = "#bf91f3";
  const pointColor = "#ff79c6";
  const gridColor = "#2f334d";

  const values = days.map((day) => day.contributionCount);

  const maxValue = Math.max(...values, 1);

  const points = days.map((day, index) => {
    const x =
      paddingLeft +
      (index / Math.max(days.length - 1, 1)) * chartWidth;

    const y =
      paddingTop +
      chartHeight -
      (day.contributionCount / maxValue) * chartHeight;

    return {
      x,
      y,
      count: day.contributionCount,
      date: day.date,
    };
  });

  const linePath = points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x.toFixed(
        2
      )} ${point.y.toFixed(2)}`;
    })
    .join(" ");

  const areaPath =
    points.length > 0
      ? `
        M ${points[0].x.toFixed(2)} ${(paddingTop + chartHeight).toFixed(2)}
        ${points
          .map(
            (point) =>
              `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`
          )
          .join(" ")}
        L ${points[points.length - 1].x.toFixed(2)} ${(
          paddingTop + chartHeight
        ).toFixed(2)}
        Z
      `
      : "";

  const horizontalGridLines = Array.from({ length: 5 }, (_, index) => {
    const y = paddingTop + (index / 4) * chartHeight;

    const value = Math.round(maxValue - (index / 4) * maxValue);

    return `
      <line
        x1="${paddingLeft}"
        y1="${y}"
        x2="${width - paddingRight}"
        y2="${y}"
        stroke="${gridColor}"
        stroke-width="1"
        opacity="0.45"
      />

      <text
        x="${paddingLeft - 12}"
        y="${y + 4}"
        fill="${textColor}"
        font-size="11"
        text-anchor="end"
        opacity="0.8"
      >
        ${value}
      </text>
    `;
  }).join("");

  const visiblePoints = points
    .filter((_, index) => index % Math.max(Math.floor(days.length / 30), 1) === 0)
    .map(
      (point) => `
        <circle
          cx="${point.x}"
          cy="${point.y}"
          r="2.6"
          fill="${pointColor}"
        >
          <title>${escapeXml(point.date)}: ${point.count} contribuições</title>
        </circle>
      `
    )
    .join("");

  const firstDate = days[0]?.date ?? "";
  const lastDate = days[days.length - 1]?.date ?? "";

  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    role="img"
    aria-label="Gráfico de atividade recente de ${escapeXml(username)}"
  >

    <defs>
      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="0%"
          stop-color="${lineColor}"
          stop-opacity="0.35"
        />

        <stop
          offset="100%"
          stop-color="${lineColor}"
          stop-opacity="0.02"
        />
      </linearGradient>
    </defs>

    <rect
      width="100%"
      height="100%"
      rx="12"
      fill="${background}"
    />

    <text
      x="${paddingLeft}"
      y="28"
      fill="${textColor}"
      font-size="18"
      font-family="Arial, Helvetica, sans-serif"
      font-weight="700"
    >
      GitHub Activity Graph
    </text>

    <text
      x="${width - paddingRight}"
      y="28"
      fill="${textColor}"
      font-size="13"
      font-family="Arial, Helvetica, sans-serif"
      text-anchor="end"
      opacity="0.9"
    >
      ${totalContributions} contribuições
    </text>

    ${horizontalGridLines}

    ${
      areaPath
        ? `
          <path
            d="${areaPath}"
            fill="url(#areaGradient)"
          />
        `
        : ""
    }

    ${
      linePath
        ? `
          <path
            d="${linePath}"
            fill="none"
            stroke="${lineColor}"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        `
        : ""
    }

    ${visiblePoints}

    <text
      x="${paddingLeft}"
      y="${height - 18}"
      fill="${textColor}"
      font-size="11"
      font-family="Arial, Helvetica, sans-serif"
      opacity="0.75"
    >
      ${escapeXml(firstDate)}
    </text>

    <text
      x="${width - paddingRight}"
      y="${height - 18}"
      fill="${textColor}"
      font-size="11"
      font-family="Arial, Helvetica, sans-serif"
      text-anchor="end"
      opacity="0.75"
    >
      ${escapeXml(lastDate)}
    </text>

  </svg>
  `;
}

function generateErrorSvg(message: string) {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="180"
      viewBox="0 0 900 180"
    >
      <rect
        width="100%"
        height="100%"
        rx="12"
        fill="#1a1b27"
      />

      <text
        x="450"
        y="75"
        text-anchor="middle"
        fill="#ff79c6"
        font-size="18"
        font-family="Arial, Helvetica, sans-serif"
        font-weight="700"
      >
        GitHub Activity Graph
      </text>

      <text
        x="450"
        y="110"
        text-anchor="middle"
        fill="#70a5fd"
        font-size="14"
        font-family="Arial, Helvetica, sans-serif"
      >
        ${escapeXml(message)}
      </text>
    </svg>
  `;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const username =
    searchParams.get("username")?.trim() || "jonas-DevOps";

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return new Response(
      generateErrorSvg("GITHUB_TOKEN não configurado na Vercel."),
      {
        status: 200,
        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  try {
    const query = `
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions

              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "jonas-dev-ops-portfolio",
      },

      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),

      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return new Response(
        generateErrorSvg(
          `GitHub API respondeu com status ${response.status}.`
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const json = (await response.json()) as GitHubResponse;

    if (json.errors?.length) {
      return new Response(
        generateErrorSvg(json.errors[0].message),
        {
          status: 200,
          headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return new Response(
        generateErrorSvg("Usuário ou contribuições não encontrados."),
        {
          status: 200,
          headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const days = calendar.weeks.flatMap(
      (week) => week.contributionDays
    );

    const svg = generateSvg(
      username,
      days,
      calendar.totalContributions
    );

    return new Response(svg, {
      status: 200,

      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",

        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar GitHub Activity Graph:", error);

    return new Response(
      generateErrorSvg("Não foi possível carregar as contribuições."),
      {
        status: 200,

        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}