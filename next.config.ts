import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname: "i.abcnewsfe.com"
      }
    ]
  }
};

export default nextConfig;
