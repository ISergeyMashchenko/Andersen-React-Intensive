import styles from "./Cart.module.css";
import { removeProduct, clearCart } from "../../Store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  
  const { productsInCart, isCartEmpty } = useSelector((state) => state.cart);

  const cartIsEmpty = (
    <div className={styles.emptyCart}>Your Cart is empty!</div>
  );

  const removeProductFromCart = (id, title, price) => {
    const removeItem = {
      id,
      title,
      price,
    };
    dispatch(removeProduct(removeItem));
  };

  const clearCartClick = () => {
    dispatch(clearCart());
  };

  const renderProductsInCart = () => {
    return Object.entries(productsInCart).map((item, id) => {
      if (item[1].count > 0) {
        return (
          <div key={id} className={styles.wrapper}>
            <div className={styles.title}>
              {item[1].title} ({item[1].count} it.)
            </div>
            <div className={styles.price}>
              Total price: {item[1].price}
              <div>
                <button
                  className={`${styles.btns} ${styles.remove}`}
                  onClick={() =>
                    removeProductFromCart(
                      item[0],
                      item[1].title,
                      item[1].price / item[1].count
                    )
                  }
                >
                  x
                </button>
              </div>
            </div>
            <div className={styles.cartFooter}>
              <button
                className={`${styles.btns} ${styles.clear}`}
                onClick={clearCartClick}
              >
                Clear cart
              </button>
              <button disabled={true} className={styles.btns}>
                Pay
              </button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className={styles.container}>
      Your Cart:
      {renderProductsInCart()}
      {isCartEmpty ? cartIsEmpty : null}
    </div>
  );
};

export default Cart;
