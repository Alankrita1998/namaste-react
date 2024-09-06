import { createSlice } from "@reduxjs/toolkit";

const loadCartFromSessionStorage = () => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:loadCartFromSessionStorage(), 
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const id = item.card.info.id;

      if (state.items[id]) {

        state.items[id].quantity += 1;
      } else {

        state.items[id] = {
          ...item,
          quantity: 1,
        };
      }
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
        sessionStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = {};
      sessionStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
