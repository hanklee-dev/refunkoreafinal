"use client";

import React, { useState } from "react";

interface OptionsSelectorProps {
  options: string[];
  multiSelect?: boolean;
  onSelect: (selected: string | string[]) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({
  options,
  multiSelect = false,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    if (multiSelect) {
      const newSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      setSelected(newSelected);
    } else {
      onSelect(option);
    }
  };

  const handleSubmit = () => {
    if (multiSelect) {
      onSelect(selected);
    }
  };

  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={`px-3 py-1 rounded-full text-sm transition duration-200 ${
            selected.includes(option)
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
        >
          {option}
        </button>
      ))}
      {multiSelect && (
        <button
          onClick={handleSubmit}
          className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition duration-200"
        >
          선택 완료
        </button>
      )}
    </div>
  );
};

export default OptionsSelector;
