import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = React.memo(
  ({ children, onClick }) => (
    <motion.button
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.2 }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.button>
  )
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
