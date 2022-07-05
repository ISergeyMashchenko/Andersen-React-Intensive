import styles from "./Order.module.css";
import { toggleCart } from "../../Store/slices/cartSlice";
import CartImage from "../../icons/basket.svg";

import { useDispatch, useSelector } from "react-redux";

const Order = ({ toggleLogin }) => {
  const dispatch = useDispatch();
  
  const { sum, amount, isCartOpen } = useSelector((state) => state.cart);

  const logOut = () => {
    toggleLogin();

    if (isCartOpen) {
      dispatch(toggleCart());
    }
  };

  const onToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          Items in the cart: <span className={styles.amount}>{amount}</span>
        </div>
        <div className={styles.price}>
          Total price: <span className={styles.amount}>{`$${sum}`}</span>
        </div>
      </div>
      <div className={styles.img} onClick={onToggleCart}>
        <img src={CartImage} alt="cart" />
      </div>
      <div className={styles.exit} onClick={logOut}>
        Log Out
      </div>
    </div>
  );
};

export default Order;
