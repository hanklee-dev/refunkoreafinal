import React from "react";
import { motion } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const reviews = [
  { store: "google", name: "김OO", date: "2일 전" },
  { store: "apple", name: "이XX", date: "3일 전" },
  { store: "google", name: "박△△", date: "1일 전" },
];

const CustomerReviews: React.FC = () => {
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
        ariaLabel="고객 리뷰"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">고객 리뷰</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  {review.store === "google" ? (
                    <FaGooglePlay className="text-green-400 mr-2" />
                  ) : (
                    <FaApple className="text-gray-400 mr-2" />
                  )}
                  <span className="font-semibold">{review.name} 고객님</span>
                  <span className="text-sm text-gray-400 ml-2">
                    {review.date} 환불 완료
                  </span>
                </div>
                <p className="text-gray-300">
                  &ldquo;다른 곳에서는 불가능하다고 했는데, 환불코리아에서는
                  신속하게 처리해주셨어요. 처음부터 여기에 맡길걸 그랬네요. 정말
                  감사합니다!&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FloatingCard>
    </motion.div>
  );
};

export default CustomerReviews;
