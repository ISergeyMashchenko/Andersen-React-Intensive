import React from "react";
import style from "../Form.module.css";

const Input = ({
  label,
  inputName,
  type,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  pattern,
  title,
}) => {
  return (
    <div className={style.form}>
      <label htmlFor={inputName}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern={pattern}
        title={title}
        className={style.input}
        required
      />
    </div>
  );
};

export default Input;
