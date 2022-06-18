import React, { Component } from "react";
import style from "../Form.module.css";

class Input extends Component {
    render() {
      const {
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
      } = this.props;
  
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
    }
  }
  
  export default Input;
