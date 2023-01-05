export const addNewProductAction = (product) => ({
  type: "ADD_PRODUCT",
  product,
});

export const initProductsAction = (products) => ({
  type: "INIT_PRODUCTS",
  products,
});
