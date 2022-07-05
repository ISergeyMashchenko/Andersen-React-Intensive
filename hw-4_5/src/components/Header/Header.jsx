import Button from "../Button/Button";
import Order from "../Order/Order";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = ({ isLogged, toggelOpenModal, toggleLogin}) => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.home_link}>
          <Link to="/">Home</Link>
        </div>
        <nav>
          <Link to="/about">About Us</Link>
        </nav>
      </div>

      {!isLogged ? (
        <Button value={"Log In"} handle={toggelOpenModal} />
      ) : (
        <Order toggleLogin={toggleLogin} />
      )}
    </div>
  );
};

export default Header;
