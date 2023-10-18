import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
 
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUserData: (state, action) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUserData } = userSlice.actions;

export default userSlice.reducer;
