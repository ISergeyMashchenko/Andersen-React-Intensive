import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.description}>This page does not exist!</h1>
      <button className={styles.back}>
        <Link to="/">Homepage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
