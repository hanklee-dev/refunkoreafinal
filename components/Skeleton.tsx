import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;

export const SkeletonText: React.FC<SkeletonProps> = ({
  className = "",
  ...props
}) => {
  return <Skeleton className={`mt-2 ${className}`} {...props} />;
};

export const SkeletonCircle: React.FC<SkeletonProps> = ({
  className = "",
  ...props
}) => {
  return <Skeleton className={`rounded-full ${className}`} {...props} />;
};
