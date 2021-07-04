import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignUpForm, IUser } from "@typings/db";
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

export const signupAction = createAsyncThunk<IUser, ISignUpForm>("user/signup", async (data) => {
  try {
    const response = await axios.post("/user", data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
