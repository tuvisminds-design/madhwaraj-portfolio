import path from "node:path";
import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  // Pin the app root so Windows `\\?\` paths are not treated as a network drive.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
