import React from "react";
import { motion } from "framer-motion";

// Define the interface for the props
interface AnimatedSectionProps {
  children: React.ReactNode;
}

// Define the AnimatedSection component using React.FC with the defined props
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
