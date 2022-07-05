import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";
import Modal from "./components/Modal/Modal";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Cart from "./components/Cart/Cart";
import { fetchProducts } from "./Store/slices/productSlice";
import styles from "./App.css";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isModalWindowOpen, setisModalWindowOpen] = useState(false);
  const [cart, setCart] = useState({ amount: 0, sum: 0 });
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const { products, offset, loading, newProductsAdded, error } = useSelector(
    (state) => state.products
  );
  const { isCartOpen } = useSelector((state) => state.cart);

  const onRequest = () => {
    dispatch(fetchProducts(offset));
  };

  useEffect(() => {
    onRequest();
  }, []);

  const toggelOpenModal = () => {
    setisModalWindowOpen((val) => {
      return !val;
    });
  };

  const toggleLogin = (e) => {
    e?.preventDefault();

    setIsLogged((val) => {
      return !val;
    });
  };

  const addProductToCart = (id, price) => {
    setCart((cart) => {
      return { amount: cart.amount + 1, sum: cart.sum + price };
    });
  };

  return (
    <div className={styles.app}>
      <Header
        isLogged={isLogged}
        toggelOpenModal={toggelOpenModal}
        toggleLogin={toggleLogin}
        cart={cart}
        user={user}
      />

      {isCartOpen ? <Cart /> : null}

      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              isLogged={isLogged}
              products={products}
              loading={loading}
              newProductsAdded={newProductsAdded}
              error={error}
              onRequest={onRequest}
              addProductToCart={addProductToCart}
            />
          }
        />
        <Route
          path={"products/:productId"}
          element={
            <ProductPage
              isLogged={isLogged}
              addProductToCart={addProductToCart}
            />
          }
        />
        <Route path={"about"} element={<About />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>

      {isModalWindowOpen ? (
        <Modal
          toggelOpenModal={toggelOpenModal}
          setUser={setUser}
          toggleLogin={toggleLogin}
        />
      ) : null}
    </div>
  );
};

export default App;
