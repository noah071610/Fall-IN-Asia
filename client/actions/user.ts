import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserRequestForm, DataResponse } from "@typings/db";
import axios, { AxiosResponse } from "axios";
import { toastErrorMessage } from "config";

export const getUserInfoAction = createAsyncThunk("/user/getInfo", async () => {
  try {
    const response = await axios.get("/user");
    return response.data as DataResponse;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const logInAction = createAsyncThunk("user/login", async (data: IUserRequestForm) => {
  try {
    const response: AxiosResponse = await axios.post("/user/login", data);
    return response.data as DataResponse;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const logoutAction = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.post("/user/logout");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const signupAction = createAsyncThunk("user/signup", async (data: IUserRequestForm) => {
  try {
    const response = await axios.post("/user", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const changeUserIconAction = createAsyncThunk("user/icon", async (data: FormData) => {
  try {
    const response = await axios.post("/user/icon", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const deleteUserIconAction = createAsyncThunk("user/icon/delete", async () => {
  try {
    const response = await axios.delete("/user/icon");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const changeUserInfoAction = createAsyncThunk(
  "user/info",
  async (form: { userName: string; introduce: string }) => {
    try {
      const response = await axios.post("/user/info", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const changeUserPasswordAction = createAsyncThunk(
  "user/password",
  async (form: { newPassword: string; prevPassword: string }) => {
    try {
      const response = await axios.post("/user/password", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const withdrawalUserAction = createAsyncThunk(
  "user/withdrawal",
  async (form: { reason: string; password: string }) => {
    try {
      const response = await axios.post("/user/withdrawal", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const followUserAction = createAsyncThunk("user/follow", async (followingId: number) => {
  try {
    const response = await axios.post(`/user/follow/${followingId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const unfollowUserAction = createAsyncThunk("user/unfollow", async (followingId: number) => {
  try {
    const response = await axios.post(`/user/unfollow/${followingId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const readNoticeAction = createAsyncThunk("/notice/read", async () => {
  try {
    const response = await axios.patch(`/user/notice`);
    return response.data as DataResponse;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
