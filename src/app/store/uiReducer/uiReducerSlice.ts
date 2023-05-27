import { createSlice } from "@reduxjs/toolkit";
import { IuiReducer } from "./uiReducer.interface";
import { setMenu, setUserMenu } from "./uiReducer.actions";

const initialState: IuiReducer = {
  menuActive: false,
  userMenuActive: false,
};

export const uiReducerSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setMenu, (state) => {
      state.menuActive = !state.menuActive;
    }).addCase(setUserMenu, (state) => {
      state.userMenuActive = !state.userMenuActive;
    });
  },
});


export const { reducer } = uiReducerSlice;
