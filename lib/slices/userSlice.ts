import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
  email: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  username: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: PayloadAction<{ username: string; email: string }>
    ) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state: UserState) => {
      state.isLoggedIn = false;
      state.username = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
