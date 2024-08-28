// actions.js

// Action Types
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Creators
export const updateQuantity = (id, amount) => ({
  type: UPDATE_QUANTITY,
  payload: { id, amount },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
