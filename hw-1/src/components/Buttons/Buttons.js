import React, { Component } from "react";
import style from "./buttons.module.css";

class Buttons extends Component {
  render() {
    return (
      <div className={style.buttons}>
        <button className={style.button}>Отмена</button>
        <button className={`${style.button} ${style.save}`} type="submit">Сохранить</button>
      </div>
    );
  }
}

export default Buttons;