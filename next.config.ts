import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      const externals = config.externals || [];
      config.externals = Array.isArray(externals)
        ? [...externals, "better-sqlite3"]
        : externals;
    }
    return config;
  },
};

export default nextConfig;
