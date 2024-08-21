import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">환불 정책</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. 환불 가능 기간</h2>
        <p>
          구매일로부터 14일 이내에 환불 신청이 가능합니다. 단, 앱을 실제로
          사용한 경우 환불이 제한될 수 있습니다.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. 환불 신청 방법</h2>
        <p>
          환불 신청은 &apos;내 환불 요청&apos; 페이지에서 할 수 있습니다. 앱
          이름, 구매일, 환불 사유 등을 정확히 기재해주세요.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. 환불 처리 기간</h2>
        <p>
          환불 신청 후 평균 3-5 영업일 내에 처리됩니다. 복잡한 케이스의 경우
          추가 시간이 소요될 수 있습니다.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. 환불 거절 사유</h2>
        <ul className="list-disc pl-5">
          <li>앱을 이미 상당 부분 사용한 경우</li>
          <li>구매 후 14일이 경과한 경우</li>
          <li>반복적인 환불 요청으로 악용이 의심되는 경우</li>
          <li>앱 설명에 명시된 기능이 정상적으로 동작하는 경우</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">5. 문의</h2>
        <p>
          환불 정책에 관해 추가 문의사항이 있으시면 고객 지원 채팅 또는
          support@refundkorea.com으로 연락 주시기 바랍니다.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
