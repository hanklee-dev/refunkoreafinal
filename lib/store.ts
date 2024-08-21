import { configureStore } from "@reduxjs/toolkit";
import refundReducer from "./slices/refundSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    refund: refundReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
