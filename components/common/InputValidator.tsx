import React from "react";
import * as Yup from "yup";

interface InputValidatorProps {
  value: string;
  validationSchema: Yup.Schema<any>;
  onValidation: (isValid: boolean, error?: string) => void;
}

const InputValidator: React.FC<InputValidatorProps> = ({
  value,
  validationSchema,
  onValidation,
}) => {
  React.useEffect(() => {
    validationSchema
      .validate(value)
      .then(() => onValidation(true))
      .catch((error) => onValidation(false, error.message));
  }, [value, validationSchema, onValidation]);

  return null; // This component doesn't render anything
};

export default InputValidator;
