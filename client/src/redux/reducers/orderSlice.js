import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: null, 
    orders: [],          
  },
  reducers: {
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload;
    },
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    clearCurrentOrder(state) {
      state.currentOrder = null;
    },
  },
});

export const { setCurrentOrder, addOrder, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
