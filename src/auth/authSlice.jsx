import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log("🚀 ~ action:", action);
      const { token, data } = action.payload;

      state.loading = true;
      state.isAuthenticated = !!token;
      state.userInfo = data;
      state.userToken = token;
    },
    removeUserInfo: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.loading = false;
      state.isAuthenticated = false;
    },
  },
});
export const { setUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
