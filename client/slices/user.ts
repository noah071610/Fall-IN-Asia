import { IUser } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  changeUserIconAction,
  changeUserInfoAction,
  changeUserPasswordAction,
  deleteUserIconAction,
  followUserAction,
  getUserInfoAction,
  logInAction,
  logoutAction,
  signupAction,
  unfollowUserAction,
  withdrawalUserAction,
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
  changeUserInfoLoading: boolean;
  changeUserInfoDone: boolean;
  changeUserInfoError: boolean;
  changeUserPasswordLoading: boolean;
  changeUserPasswordDone: boolean;
  changeUserPasswordError: boolean;
  deleteUserIconLoading: boolean;
  deleteUserIconDone: boolean;
  deleteUserIconError: boolean;
  withdrawalUserLoading: boolean;
  withdrawalUserDone: boolean;
  withdrawalUserError: boolean;
  followUserLoading: boolean;
  followUserDone: boolean;
  followUserError: boolean;
  unfollowUserLoading: boolean;
  unfollowUserDone: boolean;
  unfollowUserError: boolean;
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
  changeUserInfoLoading: false,
  changeUserInfoDone: false,
  changeUserInfoError: false,
  changeUserPasswordLoading: false,
  changeUserPasswordDone: false,
  changeUserPasswordError: false,
  deleteUserIconLoading: false,
  deleteUserIconDone: false,
  deleteUserIconError: false,
  withdrawalUserLoading: false,
  withdrawalUserDone: false,
  withdrawalUserError: false,
  followUserLoading: false,
  followUserDone: false,
  followUserError: false,
  unfollowUserLoading: false,
  unfollowUserDone: false,
  unfollowUserError: false,
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
    changeUserInfoClear(state) {
      state.changeUserInfoLoading = false;
      state.changeUserInfoDone = false;
      state.changeUserInfoError = false;
    },
    changeUserPasswordClear(state) {
      state.changeUserPasswordLoading = false;
      state.changeUserPasswordDone = false;
      state.changeUserPasswordError = false;
    },
    followUserClear(state) {
      state.followUserLoading = false;
      state.followUserDone = false;
      state.followUserError = false;
    },
    unfollowUserClear(state) {
      state.unfollowUserLoading = false;
      state.unfollowUserDone = false;
      state.unfollowUserError = false;
    },
    withdrawalUserClear(state) {
      state.withdrawalUserLoading = false;
      state.withdrawalUserDone = false;
      state.withdrawalUserError = false;
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
      .addCase(changeUserIconAction.pending, (state) => {
        state.addUserIconLoading = true;
      })
      .addCase(changeUserIconAction.fulfilled, (state) => {
        state.addUserIconLoading = false;
        state.addUserIconDone = true;
      })
      .addCase(changeUserIconAction.rejected, (state) => {
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
      .addCase(changeUserInfoAction.pending, (state) => {
        state.changeUserInfoLoading = true;
      })
      .addCase(changeUserInfoAction.fulfilled, (state) => {
        state.changeUserInfoLoading = false;
        state.changeUserInfoDone = true;
      })
      .addCase(changeUserInfoAction.rejected, (state) => {
        state.changeUserInfoLoading = false;
        state.changeUserInfoError = true;
      })
      .addCase(changeUserPasswordAction.pending, (state) => {
        state.changeUserPasswordLoading = true;
      })
      .addCase(changeUserPasswordAction.fulfilled, (state) => {
        state.changeUserPasswordLoading = false;
        state.changeUserPasswordDone = true;
      })
      .addCase(changeUserPasswordAction.rejected, (state) => {
        state.changeUserPasswordLoading = false;
        state.changeUserPasswordError = true;
      })
      .addCase(followUserAction.pending, (state) => {
        state.followUserLoading = true;
      })
      .addCase(followUserAction.fulfilled, (state) => {
        state.followUserLoading = false;
        state.followUserDone = true;
      })
      .addCase(followUserAction.rejected, (state) => {
        state.followUserLoading = false;
        state.followUserError = true;
      })
      .addCase(unfollowUserAction.pending, (state) => {
        state.unfollowUserLoading = true;
      })
      .addCase(unfollowUserAction.fulfilled, (state) => {
        state.unfollowUserLoading = false;
        state.unfollowUserDone = true;
      })
      .addCase(unfollowUserAction.rejected, (state) => {
        state.unfollowUserLoading = false;
        state.unfollowUserError = true;
      })
      .addCase(withdrawalUserAction.pending, (state) => {
        state.withdrawalUserLoading = true;
      })
      .addCase(withdrawalUserAction.fulfilled, (state) => {
        state.withdrawalUserLoading = false;
        state.withdrawalUserDone = true;
      })
      .addCase(withdrawalUserAction.rejected, (state) => {
        state.withdrawalUserLoading = false;
        state.withdrawalUserError = true;
      }),
});
