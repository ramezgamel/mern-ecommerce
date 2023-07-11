import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
    },
    incrementByAmount : (state, action) => {
      state.value += action.payload
    },
    resetCart: (state, action) => {
      state.products = [] 
    }
  },
});

export const {addToCart, removeItem, incrementByAmount, resetCart} = cartSlice.actions;
export default cartSlice.reducer