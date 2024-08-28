import { configureStore } from '@reduxjs/toolkit'
import  productsSlice  from './Slices/Products'
import  cartSlice  from './Slices/Cart'
export const store = configureStore({
  reducer: {
    product:productsSlice,
    cart:cartSlice
  },
})