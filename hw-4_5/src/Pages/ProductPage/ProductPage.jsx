import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import styles from "./ProductPage.module.css";
import { productsAPI } from "../../utils/API";
import { addProduct } from "../../Store/slices/cartSlice";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductPage = ({ isLogged }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const productAPI = new productsAPI();

  const id = useParams().productId;

  const isLoggedChecking = (
    <div className={styles.log_info}>Log in to add an item to your cart</div>
  );

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    productAPI
      .getProduct(id)
      .then(isPoductLoaded)
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const isPoductLoaded = (product) => {
    setProduct(product);
    setLoading(false);
  };

  const addProductToCart = () => {
    const { id, title, price } = product;
    const addItem = {
      id,
      title,
      price,
    };
    dispatch(addProduct(addItem));
  };

  const renderProduct = () => {
    const { title, images, description, price } = product;

    return (
      <div className={styles.container}>
        <img src={images} alt={title} />
        <div className={styles.info}>
          <div>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.price}>{`$${price}`}</div>
          {isLogged ? (
            <Button value={"Add to cart"} handle={() => addProductToCart()} />
          ) : (
            isLoggedChecking
          )}
        </div>
      </div>
    );
  };

  return <div className={styles.page}>{loading ? error : renderProduct()}</div>;
};

export default ProductPage;
