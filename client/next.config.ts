import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for memory-constrained environments (Render free tier = 512MB)
  experimental: {
    // Limit worker threads to reduce memory usage
    workerThreads: false,
    cpus: 1,
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
  },

  // Reduce build memory usage
  generateBuildId: async () => {
    // Use simple build ID instead of git hash
    return 'build-' + Date.now();
  },

  // Minimize memory during static generation
  staticPageGenerationTimeout: 120,

  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,

  // Optimize output
  poweredByHeader: false,
  compress: true,


};

export default nextConfig;
