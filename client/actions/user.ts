import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { IForm, IUser } from "@typings/db";
import { message } from "antd";
import axios from "axios";
import { toastErrorMessage } from "config";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3060/api" : process.env.BASE_URL;
axios.defaults.withCredentials = true;

export const getUserInfoAction = createAsyncThunk("/user/getInfo", async () => {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const logInAction = createAsyncThunk<any, { email: string; password: string }>(
  "user/login",
  async (data) => {
    try {
      const response = await axios.post("/user/login", data);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const signupAction = createAsyncThunk<IUser, IForm>("user/signup", async (data) => {
  try {
    const response = await axios.post("/user", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
