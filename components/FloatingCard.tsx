import React, { useState } from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  ariaLabel: string;
}

const FloatingCard: React.FC<FloatingCardProps> = React.memo(
  ({ children, delay = 0, className = "", ariaLabel }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        role="region"
        aria-label={ariaLabel}
      >
        <motion.div
          animate={isHovered ? { y: -10 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

FloatingCard.displayName = "FloatingCard";

export default FloatingCard;
