import { configureStore } from "@reduxjs/toolkit";
import routerSlice from "../services/RouterSlice";
import userSlice from "../services/UserSlice";
import { userApi } from "../api/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userSlice,
    router: routerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
