import React from "react";
import { ImSearch } from 'react-icons/im'

interface InputTextProps {
  placeholder?: string;
  className?: string;
  name?: string;
  handleOnSearch: (term: string) => void
}

export const InputText = ({
  className,
  placeholder,
  name = "input-text",
  handleOnSearch
  
}: InputTextProps) => {
  const [search, setSearch] = React.useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (search) {
      handleOnSearch(search)
      setSearch('')
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && search) {
      handleOnSearch(search)
      setSearch('')

    }
  }

  return (
    <label className={`relative overflow-hidden ${className}`} htmlFor={name}>
      <input
        className="w-full px-4 py-2 h-12"
        name={name}
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
        className="absolute h-10 top-1 right-1 bg-white py-3 px-4 flex justify-center items-center"
        onClick={onClick}
      >
        <ImSearch className="text-[1.5rem]" />
      </button>
    </label>
  );
};
