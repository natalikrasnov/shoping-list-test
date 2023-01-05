export const productsInitialState = [];

const ProductsReducer = (products, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let found = false;
      let newProducts = products.map((product) => ({ ...product }));
      products.forEach((product, index) => {
        if (
          product.product === action.product.product &&
          product.category === action.product.category
        ) {
          newProducts[index].count = product.count + 1 || 2;
          found = true;
        }
      });
      if (found) return [...newProducts];
      return [...products, action.product];
    case "INIT_PRODUCTS":
      return [...action.products];
    default:
      return [...products];
  }
};

export default ProductsReducer;
