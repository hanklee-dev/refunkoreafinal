"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";

export interface StoreSelectorProps {
  activeStore: "google" | "apple" | null;
  setActiveStore: (store: "google" | "apple") => void;
  isLoading?: boolean;
}

const StoreSelector: React.FC<StoreSelectorProps> = ({
  activeStore,
  setActiveStore,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Skeleton height="50px" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Skeleton height="200px" />
          <Skeleton height="200px" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        스토어 선택
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <StoreOption
          store="google"
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
        <StoreOption
          store="apple"
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
      </div>
    </div>
  );
};

interface StoreOptionProps {
  store: "google" | "apple";
  activeStore: "google" | "apple" | null;
  setActiveStore: (store: "google" | "apple") => void;
}

const StoreOption: React.FC<StoreOptionProps> = ({
  store,
  activeStore,
  setActiveStore,
}) => {
  const isActive = activeStore === store;
  const Icon = store === "google" ? FaGooglePlay : FaApple;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500 border-opacity-30 transition-all duration-300 ${
        isActive ? "ring-4 ring-purple-500 ring-opacity-50" : ""
      }`}
    >
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setActiveStore(store)}
      >
        <Icon className="text-5xl mb-4 text-purple-400" />
        <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {store === "google" ? "Google Play 스토어" : "App Store"}
        </h4>
        <p className="text-gray-300 mb-6 text-center leading-relaxed">
          {store === "google"
            ? "Google Play 스토어에서 구매한 앱이나 인앱 아이템의 환불을 신청할 수 있습니다. 구매 후 48시간 이내에 신청하시면 더 빠른 처리가 가능합니다."
            : "App Store에서 구매한 앱이나 인앱 아이템의 환불을 신청할 수 있습니다. Apple의 정책에 따라 처리되며, 구매 후 14일 이내에 신청하는 것이 좋습니다."}
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300 shadow-lg"
          onClick={() => setActiveStore(store)}
        >
          환불 신청하기
          <FaArrowRight className="ml-3" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StoreSelector;
