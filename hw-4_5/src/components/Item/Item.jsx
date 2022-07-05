import Button from "../Button/Button";
import styles from "./Item.module.css";
import { addProduct } from "../../Store/slices/cartSlice";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Item = ({ img, title, price, id, isLogged }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    const addItem = {
      id,
      title,
      price,
    };
    dispatch(addProduct(addItem));
  };

  const isLoggedChecking = (
    <div className={styles.log_info}>Log in to add an item to your cart</div>
  );

  return (
    <div className={styles.item}>
      <div>
        <img className={styles.image} src={img} alt={title} />
      </div>
      <div className={styles.title}>
        <Link to={`/products/${id}`}>{title}</Link>
      </div>
      <div className={styles.price}>${price}</div>

      <div>
        {!isLogged ? (
          isLoggedChecking
        ) : (
          <Button
            value={"Add to cart"}
            handle={() => addProductToCart(id, price)}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
