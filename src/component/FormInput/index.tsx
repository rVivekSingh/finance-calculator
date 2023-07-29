import React, { ChangeEvent, CSSProperties, LabelHTMLAttributes } from "react";

interface InputProps {
  label?: string;
  type: string;
  value: any;
  id?: string;
  unit?: string;
  optional?: string;
  required?: boolean;
  error?: boolean;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  optional,
  type,
  value,
  id,
  unit,
  error,
  labelStyle,
  labelProps,
  inputStyle,
  placeholder,
  required,
  onChange,
}: InputProps) => {
  return (
    <div className="input-group">
      {label && (
        <label className="label" {...labelProps} style={labelStyle}>
          {label}{" "}
          {optional && <span className="label-optional">{optional}</span>}
        </label>
      )}
      <div className="relative overflow-hidden rounded">
        <input
          type={type}
          value={value}
          className="input-field"
          style={inputStyle}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          required={required}
        />

        <div className="absolute inset-y-2 flex items-center right-2  w-7 justify-center font-medium text-xl text-slate-800 dark:text-gray-200">
          {unit}
        </div>
      </div>
      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
