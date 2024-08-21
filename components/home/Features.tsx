import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { FaClock, FaCheck, FaGlobe, FaUserTie } from "react-icons/fa";

const Features: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-32"
      variants={{
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.8, staggerChildren: 0.2 }}
    >
      <FeatureCard
        icon={FaClock}
        title="24시간 환불 서비스"
        description="언제든지 환불 신청이 가능합니다"
      />
      <FeatureCard
        icon={FaCheck}
        title="아이템 사용 후에도 OK"
        description="게임 아이템을 사용해도 환불 가능"
      />
      <FeatureCard
        icon={FaGlobe}
        title="미국 본사 직접 환불"
        description="빠르고 안전한 환불 프로세스"
      />
      <FeatureCard
        icon={FaUserTie}
        title="공인 회계사 AICPA 진행"
        description="전문가가 직접 환불을 대행합니다"
      />
    </motion.div>
  );
};

export default Features;
