import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: { products, cart },
  devTools: true,
});

export default store;
