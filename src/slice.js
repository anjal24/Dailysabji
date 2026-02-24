import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      // Find item using subServiceName
      const existingItem = state.items.find(item => item.subServiceName === action.payload.subServiceName);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      // Payload MUST be subServiceName
      const item = state.items.find(item => item.subServiceName === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      // Payload MUST be subServiceName
      const item = state.items.find(item => item.subServiceName === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove from cart if quantity hits 0
          state.items = state.items.filter(i => i.subServiceName !== action.payload);
        }
      }
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;