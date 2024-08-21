import React from "react";
import { motion, useAnimation } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";
import { FaCheck, FaClock, FaGlobe, FaUserTie } from "react-icons/fa";

interface StatItemProps {
  label: string;
  value: string;
  icon: React.ElementType;
  additionalContent?: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({
  label,
  value,
  icon: Icon,
  additionalContent,
}) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() =>
        controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.5 } })
      }
    >
      <motion.div
        className="text-4xl mb-2 text-purple-400 flex justify-center"
        animate={controls}
      >
        <Icon />
      </motion.div>
      <motion.p
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.p>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.p>
      {additionalContent}
    </motion.div>
  );
};

const RefundStats: React.FC = () => {
  return (
    <motion.div
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
        className="container mx-auto px-6 mt-16 md:mt-32 mb-16 md:mb-32 bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl border border-purple-500 border-opacity-30"
        ariaLabel="환불 통계"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">환불 통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              label="총 환불 건수"
              value="7,800+"
              icon={FaCheck}
              additionalContent={
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              }
            />
            <StatItem
              label="평균 처리 시간"
              value="24시간"
              icon={FaClock}
              additionalContent={
                <motion.div
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  업계 최고 속도
                </motion.div>
              }
            />
            <StatItem
              label="주간 방문자 수"
              value="4,823명"
              icon={FaGlobe}
              additionalContent={
                <motion.div
                  className="text-2xl font-bold text-green-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  ↑ 15%
                </motion.div>
              }
            />
            <StatItem
              label="월 최고 승인율"
              value="100%"
              icon={FaUserTie}
              additionalContent={
                <motion.div
                  className="text-sm text-yellow-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  지속적인 고품질 서비스
                </motion.div>
              }
            />
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  );
};

export default RefundStats;
