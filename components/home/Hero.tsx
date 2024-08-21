import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-32 text-white">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-96 h-96 md:w-128 md:h-128 mb-6 relative"
        >
          <Image
            src="/images/main.png"
            alt="환불코리아 로고"
            layout="fill"
            objectFit="contain"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-extrabold text-center mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          환불코리아
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          국내 유일 공식 환불 대행 서비스
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
