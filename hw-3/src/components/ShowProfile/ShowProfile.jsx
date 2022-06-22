import React from "react";
import Form from "../Form/Form";
import style from "./ShowProfile.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowProfile = () => {
  const location = useLocation();

  const { name, surname, birthday, phone, website, about, stack, description } =
    location.state || {};

  if (location.state === null) {
    alert("Заполните форму, пожалуйста");
    return <Form />;
  } else {
    return (
      <>
        <div className={style.form}>
          <h2 className={style.header}>
            {name} {surname}
          </h2>
          <ul>
            <li>
              <span>Дата рождения:</span> {birthday}
            </li>
            <li>
              <span>Номер телефона:</span> {phone}
            </li>
            <li>
              <span>Сайт:</span> {website}
            </li>
            <li>
              <span>О вас:</span> {about}
            </li>
            <li>
              <span>Стек технологий:</span> {stack}
            </li>
            <li>
              <span>Описание проекта:</span>
              {description}
            </li>
          </ul>
          <p>
          <Link className={style.close} to="/">
            X
          </Link>
        </p>
        </div>

      </>
    );
  }
};

export default ShowProfile;
