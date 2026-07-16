import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Force canonical host: non-www -> www (matches canonical tags + sitemap)
      {
        source: "/:path*",
        has: [{ type: "host", value: "realsolutionsph.com" }],
        destination: "https://www.realsolutionsph.com/:path*",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/blog/business-process-automation-philippines-sme",
        destination: "/blog/shipping-production-ai-in-four-weeks",
        permanent: true,
      },
      {
        source: "/blog/system-integration-small-business-philippines",
        destination: "/blog/proving-tenant-isolation-postgres-rls",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
