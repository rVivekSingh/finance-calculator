import React, { ChangeEvent, CSSProperties, LabelHTMLAttributes } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value: any;
  className?: string;
  optional?: string;
  required?: boolean;
  error?: boolean;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  label,
  value,
  className,
  optional,
  required,
  error,
  labelStyle,
  inputStyle,
  labelProps,
  disabled,
  onChange,
  ...rest
}: TextareaProps) => {
  return (
    <div className={`input-group`}>
      {label && (
        <label className="label" {...labelProps} style={labelStyle}>
          {label}{" "}
          {optional && <span className="label-optional">{optional}</span>}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative overflow-hidden rounded">
        <textarea
          value={value}
          className={`input-field ${className || ""}`}
          style={inputStyle}
          onChange={onChange}
          required={required}
          disabled={disabled}
          rows={5}
          {...rest}
        />
      </div>

      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
