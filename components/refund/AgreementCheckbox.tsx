"use client";

import React, { useState } from "react";

interface AgreementCheckboxProps {
  text: string;
  onAgree: () => void;
}

const AgreementCheckbox: React.FC<AgreementCheckboxProps> = ({
  text,
  onAgree,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAgree = () => {
    if (isChecked) {
      onAgree();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="mr-2"
          id="agreement-checkbox"
        />
        <label htmlFor="agreement-checkbox" className="text-sm">
          {text}
        </label>
      </div>
      <button
        onClick={handleAgree}
        disabled={!isChecked}
        className={`w-full py-2 rounded-lg transition duration-200 ${
          isChecked
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        동의합니다
      </button>
    </div>
  );
};

export default AgreementCheckbox;
