import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureIconProps {
  icon: IconType;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon: Icon }) => (
  <motion.div
    className="mb-4 text-5xl text-blue-300"
    whileHover={{ rotate: 360, scale: 1.2 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <Icon />
  </motion.div>
);

export default FeatureIcon;
