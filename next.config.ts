import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the app root so Windows `\\?\` paths are not treated as a network drive.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
