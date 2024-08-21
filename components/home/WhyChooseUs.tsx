import React from "react";
import { motion } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";
import { FaCheck, FaUserTie, FaLock, FaTrash, FaClock } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 mt-16 md:mt-32"
      variants={{
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <FloatingCard
        ariaLabel="왜 환불코리아인가요"
        className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl border border-purple-500 border-opacity-30"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            왜 환불코리아인가요?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheck className="text-green-400 mr-2" />
              <span>업계 최고의 환불 성공률 보장</span>
            </li>
            <li className="flex items-center">
              <FaUserTie className="text-blue-400 mr-2" />
              <span>전문 AICPA 회계사의 체계적인 환불 프로세스</span>
            </li>
            <li className="flex items-center">
              <FaLock className="text-purple-400 mr-2" />
              <span>SSL 암호화 및 다중 방화벽을 통한 최신 보안 기술 적용</span>
            </li>
            <li className="flex items-center">
              <FaTrash className="text-red-400 mr-2" />
              <span>서비스 종료 후 고객 데이터 완전 삭제 보장</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-yellow-400 mr-2" />
              <span>24/7 신속한 고객 응대 및 처리</span>
            </li>
          </ul>
        </div>
      </FloatingCard>
    </motion.div>
  );
};

export default WhyChooseUs;
