import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: false, // Disable trailing slashes for SPA behavior
  images: {
    unoptimized: true,
  },
  // Ensure proper asset prefix for static hosting
  assetPrefix: "",
  // Configure for SPA behavior
  skipTrailingSlashRedirect: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
