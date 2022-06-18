import React, { Component } from "react";
import style from "../Form.module.css";

class Textarea extends Component {
    render() {
      const {
        label,
        inputName,
        id,
        rows,
        value,
        placeholder,
        onChange,
        onBlur,
        maxCharacters,
      } = this.props;
  
      return (
        <div className={style.form}>
          <label htmlFor={inputName}>{label}:</label>
          <textarea
            id={id}
            rows={rows}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            maxCharacters={maxCharacters}
            className={style.input}
            required
          />
          <div className={style.form}>
            {maxCharacters - value.length}/{maxCharacters} символов осталось
          </div>
        </div>
      );
    }
  }
  
  export default Textarea;