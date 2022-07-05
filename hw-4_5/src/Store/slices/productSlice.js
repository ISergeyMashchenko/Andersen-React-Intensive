import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../utils/API";

const initialState = {
  isLogged: false,
  products: [],
  offset: 0,
  loading: true,
  newProductsAdded: false,
  error: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  (offset) => {
    const productAPI = new productsAPI();
    return productAPI.getProducts(offset);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.newProductsAdded = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.newProductsAdded = false;
        state.products = [...state.products, ...action.payload];
        state.offset += 16;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default productSlice.reducer;
