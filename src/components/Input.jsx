import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
  name = "",
  placeholder = "",
  control,
  rules = {},
  defaultValue,
  className = "",
  onChange = () => {},
  type = "text",
  ...props
}) => (
  <div>
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange: onChangeField, value },
        fieldState: { error },
      }) => (
        <div>
          <input
            value={value ?? ""}
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
          {error && <p className="text-red-600 font-bold">{error.message}</p>}
        </div>
      )}
    />
  </div>
);

export default Input;
