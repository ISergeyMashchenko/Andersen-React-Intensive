import React, { Component } from "react";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import ShowProfile from "../ShowProfile/ShowProfile";
import style from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
      website: "",
      birthday: "",
      about: "",
      stack: "",
      description: "",
      formReady: false,
    };

    this.initialValues = Object.assign({}, this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.phoneNumberMask = this.phoneNumberMask.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ formReady: true });
  }

  resetForm = () => {
    this.setState(this.initialValues);
  };

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onBlur(event) {
    this.setState({ [event.target.id]: event.target.value.trim() });
  }

  phoneNumberMask(event) {
    const maskForPhone = event.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    const val = maskForPhone
      .slice(1, 5)
      .filter((item) => item !== "")
      .join("-");
    this.setState({ [event.target.id]: val });
  }

  closeProfile = () => {
    this.resetForm();

    this.setState({
      formReady: false,
    });
  };

  render() {
    if (!this.state.formReady) {
      return (
        <div className={style.container}>
          <Header />
          <form onSubmit={this.handleSubmit} className={style.form}>
            <Input
              label="Имя"
              inputName="name"
              type="text"
              id="name"
              placeholder="Введите ваше имя"
              value={this.state.name}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern="^[A-ZА-Я].*"
              title="Первый символ это всегда заглавная буква"
            />

            <Input
              label="Фамилия"
              inputName="surname"
              type="text"
              id="surname"
              placeholder="Введите вашу фамилию"
              value={this.state.surname}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern="^[A-ZА-Я].*"
              title="Первый символ это всегда заглавная буква"
            />

            <Input
              label="Дата Рождения"
              inputName="birthday"
              type="date"
              id="birthday"
              value={this.state.birthday}
              onChange={this.onChange}
            />

            <Input
              label="Телефон"
              inputName="phone"
              type="tel"
              id="phone"
              placeholder="Введите ваш номер телефона"
              value={this.state.phone}
              onChange={this.phoneNumberMask}
              onBlur={this.onBlur}
              pattern="\d{1}-\d{4}-\d{2}-\d{2}"
              title="Телефон должен быть в формате: 7-7777-77-77"
            />

            <Input
              label="Сайт"
              inputName="website"
              type="url"
              id="website"
              placeholder="Название вашего сайта"
              value={this.state.website}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern="https?://.+"
              title="Должен начинаться с https://"
            />

            <Textarea
              label="О себе"
              inputName="about"
              id="about"
              rows="7"
              placeholder="Краткая иформация о себе"
              value={this.state.about}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxCharacters="600"
            />

            <Textarea
              label="Стек технологий"
              inputName="stack"
              id="stack"
              cols="20"
              rows="7"
              placeholder="Опишите какими технологиями вы пользуетесь"
              value={this.state.stack}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxCharacters="600"
            />

            <Textarea
              label="Описание последнего проекта"
              inputName="description"
              id="description"
              cols="20"
              rows="7"
              placeholder="Опишите ваш последний проект"
              value={this.state.description}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxCharacters="600"
            />

            <div className={style.buttons}>
              <button
                onClick={this.resetForm}
                type="button"
                className={style.button}
              >
                Отмена
              </button>
              <button type="submit" className={`${style.button} ${style.save}`}>
                Сохранить
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return <ShowProfile data={this.state} />;
    }
  }
}

export default Form;
