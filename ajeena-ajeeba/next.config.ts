import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static photos are already web-sized; serve them as-is so the site also works as a static export.
  images: { unoptimized: true },
  // Boxes now live on the menu page.
  async redirects() {
    return [{ source: "/boxes", destination: "/menu#boxes", permanent: true }];
  },
};

export default nextConfig;
