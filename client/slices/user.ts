import { IUser } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addUserIconAction,
  deleteUserIconAction,
  fanRegisterAction,
  fanWithdrawalAction,
  getUserInfoAction,
  logInAction,
  logoutAction,
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
  logoutLoading: boolean;
  logoutDone: boolean;
  logoutError: boolean;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: boolean;
  addUserIconLoading: boolean;
  addUserIconDone: boolean;
  addUserIconError: boolean;
  deleteUserIconLoading: boolean;
  deleteUserIconDone: boolean;
  deleteUserIconError: boolean;
  userFanRegisterLoading: boolean;
  userFanRegisterDone: boolean;
  userFanRegisterError: boolean;
  userFanWithdrawalLoading: boolean;
  userFanWithdrawalDone: boolean;
  userFanWithdrawalError: boolean;
}

const initialState: UserState = {
  user: null,
  getUserInfoLoading: false,
  getUserInfoDone: false,
  getUserInfoError: false,
  logInLoading: false,
  logInDone: false,
  logInError: false,
  logoutLoading: false,
  logoutDone: false,
  logoutError: false,
  signupLoading: false,
  signupDone: false,
  signupError: false,
  addUserIconLoading: false,
  addUserIconDone: false,
  addUserIconError: false,
  deleteUserIconLoading: false,
  deleteUserIconDone: false,
  deleteUserIconError: false,
  userFanRegisterLoading: false,
  userFanRegisterDone: false,
  userFanRegisterError: false,
  userFanWithdrawalLoading: false,
  userFanWithdrawalDone: false,
  userFanWithdrawalError: false,
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
    logoutClear(state) {
      state.logoutLoading = false;
      state.logoutDone = false;
      state.logoutError = false;
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
    userFanRegisterClear(state) {
      state.userFanRegisterLoading = false;
      state.userFanRegisterDone = false;
      state.userFanRegisterError = false;
    },
    userFanWithdrawalClear(state) {
      state.userFanWithdrawalLoading = false;
      state.userFanWithdrawalDone = false;
      state.userFanWithdrawalError = false;
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
      .addCase(logoutAction.pending, (state) => {
        state.logoutLoading = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.logoutLoading = false;
        state.logoutDone = true;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.logoutLoading = false;
        state.logoutError = true;
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
      })
      .addCase(fanRegisterAction.pending, (state) => {
        state.userFanRegisterLoading = true;
      })
      .addCase(fanRegisterAction.fulfilled, (state) => {
        state.userFanRegisterLoading = false;
        state.userFanRegisterDone = true;
      })
      .addCase(fanRegisterAction.rejected, (state) => {
        state.userFanRegisterLoading = false;
        state.userFanRegisterError = true;
      })
      .addCase(fanWithdrawalAction.pending, (state) => {
        state.userFanWithdrawalLoading = true;
      })
      .addCase(fanWithdrawalAction.fulfilled, (state) => {
        state.userFanWithdrawalLoading = false;
        state.userFanWithdrawalDone = true;
      })
      .addCase(fanWithdrawalAction.rejected, (state) => {
        state.userFanWithdrawalLoading = false;
        state.userFanWithdrawalError = true;
      }),
});
