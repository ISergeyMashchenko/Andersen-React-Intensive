import React, { Component } from "react";
import style from "../Form.module.css";

class Header extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1 className={style.header}> Создание анкеты </h1>
      </div>
    );
  }
}

export default Header;
