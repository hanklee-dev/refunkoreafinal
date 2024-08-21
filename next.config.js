/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // 클라이언트 사이드 빌드에서만 적용
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    // 모듈 해결 문제 해결을 위한 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  // 페이지 경로 문제 해결을 위한 설정
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  // TypeScript 빌드 오류 무시 설정 추가
  typescript: {
    ignoreBuildErrors: true,
  },
  // 동적 라우트 설정
  async rewrites() {
    return [
      {
        source: "/api/refund/admin/csv-upload/dashboard",
        destination: "/api/refund/admin/csv-upload/dashboard",
      },
      {
        source: "/dashboard",
        destination: "/dashboard",
      },
    ];
  },
};

module.exports = nextConfig;
