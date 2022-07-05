import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Our Store</h1>
      <p className={styles.description}>
        Our store is focused on the delivery of various goods such as
        electronics, electronics, food, personal care and much more. Delivery is
        carried out throughout the country.
      </p>
    </div>
  );
};

export default AboutUs;
