import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // This will hold the array of products
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Replace the entire products array with a new one
    },
    addProduct: (state, action) => {
      state.products.push(action.payload); // Add a new product to the array
    },
    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...data }; // Update the specific product
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      ); // Remove product by ID
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
