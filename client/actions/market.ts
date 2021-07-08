import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostForm } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const marketPostCreateAction = createAsyncThunk<any, any>("market/post", async (form) => {
  try {
    const response = await axios.post("/market", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const marketPostDeleteAction = createAsyncThunk<
  any,
  { postId: number; password: string; userId: number }
>("market/delete", async (data) => {
  try {
    await axios.post(`/market/delete`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const marketPostEditAction = createAsyncThunk<any, IPostForm>(
  "market/edit",
  async (form) => {
    try {
      const response = await axios.post("/market/edit", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const marketPostEditConfirmAction = createAsyncThunk<
  any,
  { postId: number; password: string }
>("market/confirm", async (data) => {
  try {
    const response = await axios.post(`/market/confirm`, data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
