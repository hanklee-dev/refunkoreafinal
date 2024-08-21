import React from "react";
import { motion } from "framer-motion";
import FloatingCard from "@/components/FloatingCard";

const RefundProcessStep: React.FC<{
  step: number;
  title: string;
  description: string;
}> = ({ step, title, description }) => (
  <motion.div
    className="flex items-start mb-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
  >
    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
      {step}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const RefundProcess: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-6 mt-16 md:mt-32"
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
        ariaLabel="환불 프로세스"
        className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl border border-purple-500 border-opacity-30"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">환불 프로세스</h2>
          <RefundProcessStep
            step={1}
            title="간편한 환불 신청"
            description="'환불 신청하기' 버튼을 클릭하여 간단한 채팅을 통해 환불 절차를 시작합니다."
          />
          <RefundProcessStep
            step={2}
            title="구매 내역 확인"
            description="구글/애플 환불 전문가가 신속하게 구매 내역을 확인합니다."
          />
          <RefundProcessStep
            step={3}
            title="환불 사유 검토 및 1:1 상담"
            description="친절한 상담원이 환불 사유를 꼼꼼히 검토하고 맞춤형 상담을 제공합니다."
          />
          <RefundProcessStep
            step={4}
            title="환불 승인 확인"
            description="신속하고 정확한 환불 승인 절차를 거쳐 결과를 즉시 알려드립니다."
          />
          <RefundProcessStep
            step={5}
            title="환불 완료 및 수수료 입금"
            description="환불 완료 확인 후, 약정된 수수료를 입금해 주시면 됩니다."
          />
          <RefundProcessStep
            step={6}
            title="개인정보 즉시 폐기"
            description="서비스 이용 후 고객의 모든 개인정보를 즉시 안전하게 폐기합니다."
          />
        </div>
      </FloatingCard>
    </motion.div>
  );
};

export default RefundProcess;
