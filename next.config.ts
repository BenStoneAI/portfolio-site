import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work/financeos-cato", destination: "/work/cato-genesis", permanent: true },
      { source: "/work/invoiceproof", destination: "/work/proof-stack", permanent: true },
      { source: "/work/conduit", destination: "/work/conduit-family", permanent: true },
    ];
  },
};

export default nextConfig;
