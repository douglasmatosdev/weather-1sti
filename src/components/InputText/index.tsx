import React from "react";
import { ImSearch } from 'react-icons/im'

interface InputTextProps {
  placeholder?: string;
  className?: string;
  name?: string;
  handler: (term: string) => void
}

export const InputText = ({
  className,
  placeholder,
  name = "input-text",
  handler
}: InputTextProps) => {
  const [search, setSearch] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
  }

  return (
    <label className={`relative overflow-hidden ${className}`} htmlFor={name}>
      <input
        className="w-full px-4 py-2 h-12"
        name={name}
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleInputChange}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.code === 'Enter') {
            handler(search)
          }
        }}
      />
      <button
        type="button"
        className="absolute h-10 top-1 right-1 bg-white py-3 px-4 flex justify-center items-center"
        onClick={() => handler(search)}
      >
        <ImSearch className="text-[1.5rem]" />
      </button>
    </label>
  );
};
