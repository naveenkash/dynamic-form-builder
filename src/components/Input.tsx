import { useState } from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  type?: string;
  placeholder?: string;
  name?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
};

const Input = ({
  label,
  value,
  onChange,
  iconStart,
  iconEnd,
  type,
  placeholder,
  name,
  error,
  disabled,
  required,
}: InputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="price"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="mt-2">
        <div
          className={`flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 ${iconEnd ? "pr-3" : ""}`}
        >
          {iconStart && (
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              {iconStart}
            </div>
          )}
          <input
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            defaultValue={value}
            type={type}
            placeholder={placeholder}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            onChange={(e) => onChange(e.target.value)}
          />
          {iconEnd && (
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              {iconEnd}
            </div>
          )}
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
