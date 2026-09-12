import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in C:\Users\brian makes Turbopack infer the home
  // directory as the workspace root. Pin it to this project instead.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
