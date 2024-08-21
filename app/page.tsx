"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import ParticleBackground from "@/components/ParticleBackground";
import ChatbotPopup from "@/components/ChatbotPopup";

const DynamicHero = dynamic(() => import("@/components/home/Hero"), {
  loading: () => <Skeleton height="600px" />,
});
const DynamicRefundCases = dynamic(
  () => import("@/components/home/RefundCases"),
  {
    loading: () => <Skeleton height="400px" />,
  }
);
const DynamicFeatures = dynamic(() => import("@/components/home/Features"), {
  loading: () => <Skeleton height="400px" />,
});
const DynamicStoreSelector = dynamic(
  () => import("@/components/home/StoreSelector"),
  {
    loading: () => <Skeleton height="300px" />,
  }
);
const DynamicRefundProcess = dynamic(
  () => import("@/components/home/RefundProcess"),
  {
    loading: () => <Skeleton height="400px" />,
  }
);
const DynamicWhyChooseUs = dynamic(
  () => import("@/components/home/WhyChooseUs"),
  {
    loading: () => <Skeleton height="400px" />,
  }
);
const DynamicRefundStats = dynamic(
  () => import("@/components/home/RefundStats"),
  {
    loading: () => <Skeleton height="300px" />,
  }
);
const DynamicCustomerReviews = dynamic(
  () => import("@/components/home/CustomerReviews"),
  {
    loading: () => <Skeleton height="400px" />,
  }
);

export default function Home() {
  const [activeStore, setActiveStore] = useState<"google" | "apple" | null>(
    null
  );
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStoreSelect = (store: "google" | "apple") => {
    setActiveStore(store);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowChatbot(true);
    }, 1000);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
    setActiveStore(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-10"></div>
      <ParticleBackground />
      <main className="relative z-10 pt-32">
        <Suspense fallback={<Skeleton height="600px" />}>
          <DynamicHero />
        </Suspense>
        <Suspense fallback={<Skeleton height="400px" />}>
          <DynamicRefundCases />
        </Suspense>
        <Suspense fallback={<Skeleton height="400px" />}>
          <DynamicFeatures />
        </Suspense>
        <Suspense fallback={<Skeleton height="300px" />}>
          <DynamicStoreSelector
            activeStore={activeStore}
            setActiveStore={handleStoreSelect}
            isLoading={isLoading}
          />
        </Suspense>
        <Suspense fallback={<Skeleton height="400px" />}>
          <DynamicRefundProcess />
        </Suspense>
        <Suspense fallback={<Skeleton height="400px" />}>
          <DynamicWhyChooseUs />
        </Suspense>
        <Suspense fallback={<Skeleton height="300px" />}>
          <DynamicRefundStats />
        </Suspense>
        <Suspense fallback={<Skeleton height="400px" />}>
          <DynamicCustomerReviews />
        </Suspense>
      </main>
      <ChatbotPopup
        isOpen={showChatbot}
        onClose={handleChatbotClose}
        isLoading={isLoading}
      />
    </div>
  );
}
