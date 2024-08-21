import React from "react";
import FloatingCard from "./FloatingCard";
import FeatureIcon from "./FeatureIcon";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(
  ({ icon, title, description }) => (
    <FloatingCard ariaLabel={title}>
      <div className="p-4 md:p-6 flex flex-col items-center text-white">
        <FeatureIcon icon={icon} />
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-100">{description}</p>
      </div>
    </FloatingCard>
  )
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
