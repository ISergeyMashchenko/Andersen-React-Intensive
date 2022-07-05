const initialState = {
  isLogged: false,
  isModalWindowOpen: false,
  cart: { amount: 0, sum: 0 },
  productsAmount: {},
  products: [],
  offset: 0,
  loading: true,
  newProductsAdded: false,
  error: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
