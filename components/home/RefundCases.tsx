import React from "react";
import { motion } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";
import ReviewSlider from "@/components/ReviewSlider";

const RefundCases: React.FC = () => {
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
      <div className="container mx-auto px-6 mb-16 md:mb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          환불 사례
        </h2>
        <FloatingCard
          className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl p-8 md:p-12 border border-purple-500 border-opacity-30"
          ariaLabel="환불 사례"
        >
          <div className="w-full max-w-5xl mx-auto">
            <ReviewSlider />
          </div>
        </FloatingCard>
      </div>
    </motion.div>
  );
};

export default RefundCases;
