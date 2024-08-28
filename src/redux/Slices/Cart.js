// redux/Slices/Cart.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Use "products" as the key instead of "cart"
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...data };
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((product) => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
