import React from "react";
import { Providers } from "../lib/providers";
import AuthProvider from "./AuthProvider";
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "환불코리아 - 앱 환불 쉽고 빠르게",
  description:
    "앱스토어나 구글플레이에서 결제한 앱, 쉽게 환불받으세요. 환불코리아가 빠르고 간편한 환불 프로세스를 도와드립니다!",
  keywords:
    "앱 환불, 구글플레이 환불, 애플 앱스토어 환불, 인앱결제 환불, 앱 결제 취소",
  openGraph: {
    title: "환불코리아 - 앱 환불 쉽고 빠르게",
    description:
      "앱스토어나 구글플레이에서 결제한 앱, 쉽게 환불받으세요. 환불코리아가 빠르고 간편한 환불 프로세스를 도와드립니다!",
    url: "https://www.refundkorea.com",
    siteName: "환불코리아",
    images: [
      {
        url: "https://www.refundkorea.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "환불코리아 로고 및 서비스 소개",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <AuthProvider>
          <Providers>
            <GlobalErrorBoundary>{children}</GlobalErrorBoundary>
          </Providers>
        </AuthProvider>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "환불코리아",
              "url": "https://www.refundkorea.com",
              "logo": "https://www.refundkorea.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/refundkorea",
                "https://www.twitter.com/refundkorea",
                "https://www.instagram.com/refundkorea"
              ],
              "description": "앱스토어나 구글플레이에서 결제한 앱, 쉽게 환불받으세요. 환불코리아가 빠르고 간편한 환불 프로세스를 도와드립니다!",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82-XXX-XXXX",
                "contactType": "customer service"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
