import Item from "../../components/Item/Item";
import styles from "./Home.module.css";

const Home = ({ isLogged, products, loading, error, addProductToCart }) => {
  const renderProducts = () => {
    const result = products.map((item) => {
      return (
        <Item
          isLogged={isLogged}
          key={item.id}
          title={item.title}
          img={item.images[0]}
          id={item.id}
          price={item.price}
          addProductToCart={addProductToCart}
        />
      );
    });

    return result;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>{loading ? error : renderProducts()}</div>
    </div>
  );
};

export default Home;
