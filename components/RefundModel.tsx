import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import * as THREE from "three";

const RefundModel: React.FC = () => {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.5;
      torusRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Torus ref={torusRef} args={[1, 0.4, 16, 100]}>
      <meshNormalMaterial />
    </Torus>
  );
};

export default RefundModel;
