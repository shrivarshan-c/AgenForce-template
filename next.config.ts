
import type { NextConfig } from "next";



export const ImageDomains = [
  'assets.aceternity.com'
]
const nextConfig: NextConfig = {
  /* config options here */


  images:{
    domains:ImageDomains
  }

};

export default nextConfig;
