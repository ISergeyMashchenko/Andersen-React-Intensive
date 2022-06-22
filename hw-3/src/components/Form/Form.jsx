import { useState } from "react";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import style from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  surname: "",
  phone: "",
  website: "",
  birthday: "",
  about: "",
  stack: "",
  description: "",
};

const Form = () => {
  const navigate = useNavigate();

  const [customState, setState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/profile", { state: customState });
  };

  const resetForm = () => {
    setState(initialState);
  };

  const onChange = (event) => {
    setState((customState) => ({
      ...customState,
      [event.target.id]: event.target.value,
    }));
  };

  const onBlur = (event) => {
    setState((customState) => ({
      ...customState,
      [event.target.id]: event.target.value.trim(),
    }));
  };

  const phoneNumberMask = (event) => {
    const maskForPhone = event.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    const val = maskForPhone
      .slice(1, 5)
      .filter((item) => item !== "")
      .join("-");
    setState((customState) => ({
      ...customState,
      [event.target.id]: val,
    }));
  };

  return (
    <div className={style.container}>
      <Header />
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          label="Имя"
          inputName="name"
          type="text"
          id="name"
          placeholder="Введите ваше имя"
          value={customState.name}
          onChange={onChange}
          onBlur={onBlur}
          pattern="^[A-ZА-Я].*"
          title="Первый символ это всегда заглавная буква"
        />

        <Input
          label="Фамилия"
          inputName="surname"
          type="text"
          id="surname"
          placeholder="Введите вашу фамилию"
          value={customState.surname}
          onChange={onChange}
          onBlur={onBlur}
          pattern="^[A-ZА-Я].*"
          title="Первый символ это всегда заглавная буква"
        />

        <Input
          label="Дата Рождения"
          inputName="birthday"
          type="date"
          id="birthday"
          value={customState.birthday}
          onChange={onChange}
        />

        <Input
          label="Телефон"
          inputName="phone"
          type="tel"
          id="phone"
          placeholder="Введите ваш номер телефона"
          value={customState.phone}
          onChange={phoneNumberMask}
          onBlur={onBlur}
          pattern="\d{1}-\d{4}-\d{2}-\d{2}"
          title="Телефон должен быть в формате: 7-7777-77-77"
        />

        <Input
          label="Сайт"
          inputName="website"
          type="url"
          id="website"
          placeholder="Название вашего сайта"
          value={customState.website}
          onChange={onChange}
          onBlur={onBlur}
          pattern="https?://.+"
          title="Должен начинаться с https://"
        />

        <Textarea
          label="О себе"
          inputName="about"
          id="about"
          rows="7"
          placeholder="Краткая иформация о себе"
          value={customState.about}
          onChange={onChange}
          onBlur={onBlur}
          maxCharacters="600"
        />

        <Textarea
          label="Стек технологий"
          inputName="stack"
          id="stack"
          rows="7"
          placeholder="Опишите какими технологиями вы пользуетесь"
          value={customState.stack}
          onChange={onChange}
          onBlur={onBlur}
          maxCharacters="600"
        />

        <Textarea
          label="Описание последнего проекта"
          inputName="description"
          id="description"
          rows="7"
          placeholder="Опишите ваш последний проект"
          value={customState.description}
          onChange={onChange}
          onBlur={onBlur}
          maxCharacters="600"
        />

        <div className={style.buttons}>
          <button onClick={resetForm} type="button" className={style.button}>
            Отмена
          </button>
          <button type="submit" className={`${style.button} ${style.save}`}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
