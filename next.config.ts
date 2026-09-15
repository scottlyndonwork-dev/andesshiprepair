import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      // Allow all local /public assets with no query string (the default).
      { pathname: "/**", search: "" },
      // Bump the "?v=" value here to match lib/assets.ts whenever it changes.
      { pathname: "/andes-logo.png", search: "?v=2" },
    ],
  },
};

export default nextConfig;
