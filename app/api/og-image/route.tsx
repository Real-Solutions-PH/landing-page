import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  const [interRegular, interBold] = await Promise.all([
    fetch(`${origin}/fonts/Inter-Regular.woff`).then((r) => r.arrayBuffer()),
    fetch(`${origin}/fonts/Inter-ExtraBold.woff`).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#0B1120",
          color: "white",
          fontFamily: "Inter",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background radial gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              "radial-gradient(circle at top right, rgba(30,41,59,0.5) 0%, #0B1120 60%)",
            display: "flex",
          }}
        />

        {/* Content row */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* LEFT COLUMN */}
          <div
            style={{
              width: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${origin}/logo/logo-header-dark-transparent 1.svg`}
              alt="Real Solutions PH"
              width={241}
              height={60}
              style={{ marginBottom: "28px" }}
            />

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "54px",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "white",
                marginBottom: "28px",
              }}
            >
              <span style={{ display: "flex" }}>Your business</span>
              <span style={{ display: "flex" }}>software,</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "16px",
                  marginTop: "8px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    background: "#2563eb",
                    color: "white",
                    padding: "4px 20px",
                    borderRadius: "12px",
                  }}
                >
                  built right,
                </span>
                <span style={{ display: "flex", color: "#facc15", fontSize: "36px" }}>
                  →
                </span>
              </div>
              <span style={{ display: "flex", marginTop: "8px" }}>
                and managed for you.
              </span>
            </div>

            {/* Subheadline */}
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#94a3b8",
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: "460px",
              }}
            >
              Production-grade custom software and system integrations for
              SMEs. Fully built, scalable, and maintained.
            </div>

            {/* URL footer */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: "32px",
                display: "flex",
                alignItems: "center",
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              <span style={{ display: "flex" }}>realsolutionsph.com</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            style={{
              width: "480px",
              position: "relative",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Central glow */}
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "80px",
                width: "280px",
                height: "280px",
                background: "rgba(37,99,235,0.18)",
                borderRadius: "50%",
                display: "flex",
              }}
            />

            {/* Main dashboard panel */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "250px",
                background: "rgba(15,23,42,0.97)",
                border: "1px solid rgba(71,85,105,0.8)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  height: "40px",
                  background: "rgba(30,41,59,0.9)",
                  borderBottom: "1px solid rgba(71,85,105,0.5)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0 16px",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "rgba(239,68,68,0.8)",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "rgba(234,179,8,0.8)",
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "rgba(52,211,153,0.8)",
                    display: "flex",
                  }}
                />
              </div>

              {/* Body */}
              <div
                style={{
                  flex: 1,
                  padding: "20px 24px 16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        display: "flex",
                        color: "#94a3b8",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      Operational Overview
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          fontSize: "26px",
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        Unified
                      </span>
                      <span
                        style={{
                          display: "flex",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#34d399",
                          background: "rgba(52,211,153,0.1)",
                          border: "1px solid rgba(52,211,153,0.25)",
                          padding: "3px 8px",
                          borderRadius: "6px",
                        }}
                      >
                        ↑ Live
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "10px",
                      background: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      borderRadius: "12px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                </div>

                {/* Chart */}
                <svg
                  viewBox="0 0 100 40"
                  style={{ width: "100%", height: "75px" }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 40 L0 25 C10 25 15 35 25 30 C35 25 40 10 50 15 C60 20 65 5 75 10 C85 15 90 0 100 5 L100 40 Z"
                    fill="url(#cg)"
                  />
                  <path
                    d="M0 25 C10 25 15 35 25 30 C35 25 40 10 50 15 C60 20 65 5 75 10 C85 15 90 0 100 5"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="5"
                    r="3.5"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Card 1: System Sync */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "0px",
                background: "rgba(30,41,59,0.95)",
                border: "1px solid rgba(71,85,105,0.8)",
                borderRadius: "12px",
                padding: "14px",
                width: "160px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    background: "rgba(168,85,247,0.2)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth="2"
                  >
                    <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                    <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                    <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
                  </svg>
                </div>
                <span
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                  }}
                >
                  System Sync
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "100%",
                    background: "rgba(71,85,105,0.5)",
                    borderRadius: "999px",
                    display: "flex",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "85%",
                      background: "#a855f7",
                      borderRadius: "999px",
                      display: "flex",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#94a3b8",
                  }}
                >
                  <span style={{ display: "flex" }}>API Connected</span>
                  <span style={{ display: "flex", color: "#c084fc" }}>
                    Stable
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Production Code */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                right: "0px",
                background: "#0B1120",
                border: "1px solid rgba(59,130,246,0.35)",
                borderRadius: "12px",
                padding: "14px",
                width: "185px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    background: "rgba(59,130,246,0.2)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                  }}
                >
                  Production Code
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#94a3b8",
                  background: "#0f172a",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #1e293b",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "4px",
                  }}
                >
                  <span style={{ display: "flex", color: "#f472b6" }}>const</span>
                  <span style={{ display: "flex", color: "#93c5fd" }}>MVP</span>
                  <span style={{ display: "flex", color: "#94a3b8" }}>=</span>
                  <span style={{ display: "flex", color: "#fde047" }}>async</span>
                  <span style={{ display: "flex", color: "#94a3b8" }}>{"() => {"}</span>
                </div>
                <span
                  style={{
                    display: "flex",
                    paddingLeft: "12px",
                    color: "#34d399",
                  }}
                >
                  await buildApp();
                </span>
                <span
                  style={{
                    display: "flex",
                    paddingLeft: "12px",
                    color: "#475569",
                  }}
                >
                  {"// No shortcuts"}
                </span>
                <span style={{ display: "flex", color: "#94a3b8" }}>{"}"}</span>
              </div>
            </div>

            {/* Floating Card 3: Fully Managed */}
            <div
              style={{
                position: "absolute",
                bottom: "130px",
                left: "0px",
                background: "rgba(30,41,59,0.85)",
                border: "1px solid rgba(52,211,153,0.25)",
                borderRadius: "12px",
                padding: "12px",
                width: "150px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "rgba(52,211,153,0.2)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                  }}
                >
                  Fully Managed
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "3px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#34d399",
                      display: "flex",
                    }}
                  />
                  <span
                    style={{
                      display: "flex",
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#34d399",
                    }}
                  >
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          weight: 400 as const,
          style: "normal" as const,
        },
        {
          name: "Inter",
          data: interBold,
          weight: 800 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
