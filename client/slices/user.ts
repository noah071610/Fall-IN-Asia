import { IUser } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addUserIconAction,
  deleteUserIconAction,
  getUserInfoAction,
  logInAction,
  signupAction,
} from "actions/user";

export interface UserState {
  user: IUser | null;
  getUserInfoLoading: boolean;
  getUserInfoDone: boolean;
  getUserInfoError: boolean;
  logInLoading: boolean;
  logInDone: boolean;
  logInError: boolean;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: boolean;
  addUserIconLoading: boolean;
  addUserIconDone: boolean;
  addUserIconError: boolean;
  deleteUserIconLoading: boolean;
  deleteUserIconDone: boolean;
  deleteUserIconError: boolean;
}

const initialState: UserState = {
  user: null,
  getUserInfoLoading: false,
  getUserInfoDone: false,
  getUserInfoError: false,
  logInLoading: false,
  logInDone: false,
  logInError: false,
  signupLoading: false,
  signupDone: false,
  signupError: false,
  addUserIconLoading: false,
  addUserIconDone: false,
  addUserIconError: false,
  deleteUserIconLoading: false,
  deleteUserIconDone: false,
  deleteUserIconError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInClear(state) {
      state.logInLoading = false;
      state.logInDone = false;
      state.logInError = false;
    },
    signupClear(state) {
      state.signupLoading = false;
      state.signupDone = false;
      state.signupError = false;
    },
    addUserIconClear(state) {
      state.addUserIconLoading = false;
      state.addUserIconDone = false;
      state.addUserIconError = false;
    },
    deleteUserIconClear(state) {
      state.deleteUserIconLoading = false;
      state.deleteUserIconDone = false;
      state.deleteUserIconError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUserInfoAction.pending, (state) => {
        state.getUserInfoLoading = true;
      })
      .addCase(getUserInfoAction.fulfilled, (state, action) => {
        state.getUserInfoLoading = false;
        state.getUserInfoDone = true;
        state.user = action.payload.data;
      })
      .addCase(getUserInfoAction.rejected, (state) => {
        state.getUserInfoLoading = false;
        state.getUserInfoError = true;
      })
      .addCase(logInAction.pending, (state) => {
        state.logInLoading = true;
      })
      .addCase(logInAction.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.user = action.payload.data;
      })
      .addCase(logInAction.rejected, (state) => {
        state.logInLoading = false;
        state.logInError = true;
      })
      .addCase(signupAction.pending, (state) => {
        state.signupLoading = true;
      })
      .addCase(signupAction.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
      })
      .addCase(signupAction.rejected, (state) => {
        state.signupLoading = false;
        state.signupError = true;
      })
      .addCase(addUserIconAction.pending, (state) => {
        state.addUserIconLoading = true;
      })
      .addCase(addUserIconAction.fulfilled, (state) => {
        state.addUserIconLoading = false;
        state.addUserIconDone = true;
      })
      .addCase(addUserIconAction.rejected, (state) => {
        state.addUserIconLoading = false;
        state.addUserIconError = true;
      })
      .addCase(deleteUserIconAction.pending, (state) => {
        state.deleteUserIconLoading = true;
      })
      .addCase(deleteUserIconAction.fulfilled, (state) => {
        state.deleteUserIconLoading = false;
        state.deleteUserIconDone = true;
      })
      .addCase(deleteUserIconAction.rejected, (state) => {
        state.deleteUserIconLoading = false;
        state.deleteUserIconError = true;
      }),
});
