import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // important note = Reducers must remain pure ... as short as possible

      //   if (existingItem) {
      //alert("Already Added Product to the Cart");

      //     toast.info("Already Added Product to the Cart", {
      //       position: "top-left",
      //     });
      //   } else {
      //     state.items.push({ ...action.payload, quantity: 1 });
      //   }

      //   if (!existingItem) {
      //     const qty = action.payload.quantity || 1;
      //     state.items.push({ ...action.payload, quantity: qty });
      //   }

      // If action.payload.quantity exists and is truthy (e.g. not 0, undefined, null, false, or NaN), use it. Otherwise, fallback to 1

      //   const qty = action.payload.quantity || 1;

      //   if (existingItem) {
      //     existingItem.quantity += qty;
      //   } else {
      //     state.items.push({
      //       ...action.payload,
      //       quantity: qty,
      //     });
      //   }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity <= 0 ? 1 : quantity;
      }

      //   if (item && quantity > 0) {
      //     item.quantity = quantity;
      //   }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
