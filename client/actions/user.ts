import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserRequestForm, IUser } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const getUserInfoAction = createAsyncThunk("/user/getInfo", async () => {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const logInAction = createAsyncThunk<any, IUserRequestForm>("user/login", async (data) => {
  try {
    const response = await axios.post("/user/login", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const logoutAction = createAsyncThunk<any>("user/logout", async () => {
  try {
    const response = await axios.post("/user/logout");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const signupAction = createAsyncThunk<IUser, IUserRequestForm>(
  "user/signup",
  async (data) => {
    try {
      const response = await axios.post("/user", data);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const addUserIconAction = createAsyncThunk<any, any>("user/icon", async (data) => {
  try {
    const response = await axios.post("/user/icon", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const deleteUserIconAction = createAsyncThunk<any>("user/icon/delete", async () => {
  try {
    const response = await axios.delete("/user/icon");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
