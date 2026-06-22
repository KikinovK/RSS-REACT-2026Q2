import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pokemons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
