import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import style from "./form.module.css";

class Form extends Component {
  render() {
    return (
      <form className={style.form}>
        <h1 className={style.header}>Создание анкеты</h1>

        <label className={style.label} for="name">Имя</label>
        <input
          className={style.input}
          type={"text"}
            name="name"
          placeholder={"Введите ваше имя"}
        ></input>

        <label className={style.label} for="surname">Фамилия</label>
        <input
          className={style.input}
          type={"text"}
            name="surname"
          placeholder={"Введите вашу фамилию"}
        ></input>

        <label className={style.label} for="birtdate">Дата Рождения</label>
        <input
          className={style.input}
          type={"date"}
            name="birthdate"
          placeholder={"Ваша дата рождения"}
        ></input>

        <label className={style.label} for="phonenumber">Телефон</label>
        <input
          className={style.input}
          type={"tel"}
            name="phonenumber"
          placeholder={"Введите ваш номер телефона"}
        ></input>

        <label className={style.label} for="website">Сайт</label>
        <input
          className={style.input}
          type={"text"}
            name="website"
          placeholder={"Название вашего сайта"}
        ></input>

        <label className={style.label} for="about">О себе</label>
        <textarea
          name="about"
          rows={7}
          className={style.input}
          placeholder={"Краткая иформация о себе"}
        ></textarea>

        <label className={style.label} for="stack">Стек технологий</label>
        <textarea
          name="stack"
          rows={7}
          className={style.input}
          placeholder={"Опишите какими технологиями вы пользуетесь"}
        ></textarea>

        <label className={style.label} for="description">Описание последнего проекта</label>
        <textarea
          name="description"
          rows={7}
          className={style.input}
          placeholder={"Опишите ваш последний проект"}
        ></textarea>

        <Buttons />
      </form>
    );
  }
}

export default Form;