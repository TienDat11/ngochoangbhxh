import type { NextConfig } from "next";
import { PUBLIC_BASE_PATH } from "./lib/site-paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: PUBLIC_BASE_PATH,
};

export default nextConfig;
