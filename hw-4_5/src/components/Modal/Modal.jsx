import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import { usersAPI } from "../../utils/API";

const Modal = ({ toggelOpenModal, setUser, toggleLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const newRequest = new usersAPI();

  const errorText = (
    <div className={styles.error}>Wrong email or password!</div>
  );

  const onChangeValue = (e, setFunction) => {
    setFunction(e.target.value);
  };

  const loginRequest = () => {
    setLoading(true);

    newRequest
      .login({
        email: login,
        password: password,
      })
      .then((item) => loginUser(item.access_token))
      .catch(() => console.log("Error"));
  };

  const loginUser = (res) => {
    setLoading(false);
    if (res) {
      setErrorLogin(false);
      toggleLogin();

      newRequest
        .getUserWithSession(res)
        .then((data) => {
          setUser(data);
          toggelOpenModal();
        })
        .catch(() => console.log("Error"));
    } else {
      setErrorLogin(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            placeholder="email"
            value={login}
            onChange={(e) => onChangeValue(e, setLogin)}
            type="email"
            name="email"
            id="email"
          />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            value={password}
            onChange={(e) => onChangeValue(e, setPassword)}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <div className={styles.btns}>
          <div className={styles.btn}>
            <Button
              isDisabled={loading}
              handle={loginRequest}
              value={"Log In"}
            />
          </div>
          <div className={styles.btn}>
            <Button
              isDisabled={loading}
              handle={toggelOpenModal}
              value={"Cancel"}
            />
          </div>
        </div>

        {errorLogin ? errorText : null}

        <div className={styles.close} onClick={toggelOpenModal}>
          x
        </div>
      </div>
    </div>
  );
};

export default Modal;
