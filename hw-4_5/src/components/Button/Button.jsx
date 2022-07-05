import styles from "./Button.module.css";

const Button = ({ value, handle, isDisabled = false }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={isDisabled}
        onClick={handle}
        href="#"
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
