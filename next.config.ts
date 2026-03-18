import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/meal-planner',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
