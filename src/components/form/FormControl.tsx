import React from 'react';
import Label from './Label';

interface FormControlProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  hint?: string;
  error?: boolean;
  required?: boolean;
  success?: boolean;
  className?: string;
}

const FormControl: React.FC<FormControlProps> = ({
  label,
  htmlFor,
  children,
  hint,
  error = false,
  required = false,
  success = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>
        {label} {required && <span className="text-error-500">*</span>}
      </Label>
      {children}
      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormControl; 