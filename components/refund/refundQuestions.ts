export interface Question {
  key: string;
  text: string;
  isUser?: boolean;
  options?: string[];
  multiSelect?: boolean;
  isAgreement?: boolean;
  isFileUpload?: boolean;
}

export const questions: Question[] = [
  {
    key: "store",
    text: "환불 받으실 스토어를 선택해주세요.",
    options: ["구글 플레이스토어", "애플 앱스토어"],
  },
  { key: "paymentId", text: "결제 아이디를 입력해주세요." },
  { key: "paymentPassword", text: "결제 비밀번호를 입력해주세요." },
  {
    key: "games",
    text: "환불 받을 게임을 입력해주세요. (복수 입력 가능, 쉼표로 구분)",
  },
  { key: "refundAmount", text: "대략적인 환불 금액을 입력해주세요." },
  { key: "birthdate", text: "생년월일을 입력해주세요. (예: 1990-01-01)" },
  {
    key: "device",
    text: "결제 기기를 선택해주세요.",
    options: ["핸드폰", "컴퓨터(녹스,미뮤 등)", "복합적"],
  },
  {
    key: "paymentMethod",
    text: "결제인증 수단 및 보안방식을 선택해주세요.",
    options: [
      "사용 안함(자동 결제)",
      "매번 비밀번호 입력",
      "매번 지문입력",
      "30분마다 지문 또는 비밀번호 입력",
      "첫번째 비밀번호 입력 후 자동결제",
      "페이스 아이디(얼굴 인식)",
    ],
  },
  {
    key: "paymentMeans",
    text: "결제 했던 수단을 선택해주세요. (다중 선택 가능)",
    options: [
      "신용카드",
      "체크카드",
      "통신사결제",
      "기프트카드",
      "페이코(PAYCO)",
      "카카오페이",
    ],
    multiSelect: true,
  },
  {
    key: "refundHistory",
    text: "환불이력/시도를 하셨나요?",
    options: [
      "전부 없다",
      "업체를 통해 받은적이 있다",
      "본인이 직접 받은적이 있다",
      "본인이 시도후 실패했다",
      "본인이 시도후 일부만 환불승인",
    ],
  },
  {
    key: "agreement1",
    text: "환불승인시 환불금은 결제수단마다 평균 3일의 소요기간을 걸쳐 지급됩니다.",
    isAgreement: true,
  },
  {
    key: "agreement2",
    text: "수수료는 환불금을 받은 후가 아닌 승인확인 당일 입금입니다.",
    options: ["네 환불 승인 확인 후 입금하겠습니다"],
  },
  {
    key: "agreement3",
    text: "환불승인 후 수수료 미납시 본 신청서는 법적 자료로 사용 될 수 있습니다.",
    isAgreement: true,
  },
  {
    key: "agreement4",
    text: "수수료는 환불 승인금액의 30%입니다.",
    isAgreement: true,
  },
  {
    key: "paymentTiming",
    text: "결제내역에 환불 됨 / 취소 됨 확인 후 수수료는 당일 입금이 원칙입니다.",
    options: [
      "네 당일 입금 가능합니다",
      "당장 여유가 안돼서 협의가 필요합니다",
    ],
  },
  {
    key: "agreement5",
    text: "수수료가 계약일 이내에 입금되지 않을 경우 수수료 50%를 지급합니다.",
    isAgreement: true,
  },
  {
    key: "agreement6",
    text: "수수료가 계약일 이내에 입금되지 않을경우 민·형사상 법적절차가 진행됩니다.",
    isAgreement: true,
  },
  {
    key: "refundPeriod",
    text: "구글 65일(최대 120일) 애플 60일내 모두 환불 진행 원하시나요?",
    options: ["기간 내에 있는 결제건 모두 진행", "위에 적힌 게임만 진행"],
  },
  {
    key: "agreement7",
    text: "환불문의하신 내역중 일부분만 환불이 가능할 수도 있습니다.",
    isAgreement: true,
  },
  {
    key: "agreement8",
    text: "수수료 입금 후 개인정보는 폐기 처리됩니다.",
    isAgreement: true,
  },
  {
    key: "agreement9",
    text: "환불 완료 시까지 비밀번호 변경 혹은 추가 결제 절대 하시면 안됩니다.",
    isAgreement: true,
  },
  {
    key: "agreement10",
    text: "환불 진행 후 번복은 불가능합니다.",
    isAgreement: true,
  },
  {
    key: "agreement11",
    text: "환불코리아에 모든 환불 진행 권한을 위임합니다.",
    isAgreement: true,
  },
  {
    key: "discoveryChannel",
    text: "환불코리아를 맨 처음 접한곳은 어디인가요?",
    options: [
      "페이스북",
      "네이버 지식인",
      "네이버 블로그",
      "아프리카 TV",
      "구글 검색",
      "지인 추천",
    ],
  },
  {
    key: "screenshot",
    text: "결제 내역 스크린샷을 업로드해주세요.",
    isFileUpload: true,
  },
];
