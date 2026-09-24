import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static photos are already web-sized; serve them as-is so the site also works as a static export.
  images: { unoptimized: true },
};

export default nextConfig;
