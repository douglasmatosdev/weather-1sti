import React from "react";
import {ImSearch} from 'react-icons/im'

interface InputTextProps {
  value?: string;
  placeholder?: string;
  className?: string;
  name?: string;
}

export const InputText = ({
  className,
  placeholder,
  value = "",
  name = "input-text",
}: InputTextProps) => {
  return (
    <label className={className + " relative overflow-hidden"} htmlFor={name}>
      <input className="px-4 py-2 h-12" name={name} type="text" placeholder={placeholder} value={value} />
      <button type="button" className="absolute top-1 right-0 bg-white py-3 px-4">
        <ImSearch className="text-[1.2rem]" />
      </button>
    </label>
  );
};
