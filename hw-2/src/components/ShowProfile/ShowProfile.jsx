import React, { Component } from "react";
import style from "./ShowProfile.module.css";

class ShowProfile extends Component {
  render() {
    const {
      name,
      surname,
      birthday,
      phone,
      website,
      about,
      stack,
      description,
    } = this.props.data;
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
          <div className={style.close} onClick={this.props.closeProfile}>X </div>
        </div>
      </>
    );
  }
}

export default ShowProfile;
