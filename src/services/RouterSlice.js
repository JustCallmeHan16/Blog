import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hide: false,
};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    hideToggle: (state, action) => {
      state.hide = action.payload;
    },
  },
});

export const { hideToggle } = routerSlice.actions;

export default routerSlice.reducer;
