import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostForm } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const clubPostCreateAction = createAsyncThunk<any, IPostForm>("club/post", async (form) => {
  try {
    const response = await axios.post("/club", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostDeleteAction = createAsyncThunk<
  any,
  { postId: number; password: string; userId: number }
>("club/delete", async (data) => {
  try {
    await axios.post(`/club/delete`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostEditAction = createAsyncThunk<any, IPostForm>("club/edit", async (form) => {
  try {
    const response = await axios.post("/club/edit", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostEditConfirmAction = createAsyncThunk<
  any,
  { postId: number; password: string }
>("club/confirm", async (data) => {
  try {
    const response = await axios.post(`/club/confirm`, data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
