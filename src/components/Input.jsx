import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
  control,
  name = "",
  rules = {},
  className = "",
  onChange = () => {},
  type = "text",
  placeholder = "",
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange: onChangeField, value },
      fieldState: { error },
    }) => (
      <input
        value={value ?? ''}
        id={`textfield-${name}`}
        onChange={(event) => {
          onChangeField(event.target.value);
          onChange(event.target.value);
        }}
        className={`shadow rounded p-4 text-lg w-full outline-none border-1 border-[#7b7b7b33] mb-4 ${className} `}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    )}
  />
);

export default Input;
