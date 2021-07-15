import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const commentCreateAction = createAsyncThunk<any, any>("comment/create", async (data) => {
  try {
    await axios.post(`/comment`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const commentDeleteAction = createAsyncThunk<any, any>("comment/delete", async (data) => {
  try {
    await axios.post(`/comment/delete`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const subCommentCreateAction = createAsyncThunk<any, any>(
  "comment/subComment/create",
  async (data) => {
    try {
      await axios.post(`/comment/subComment`, data);
      return;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const subCommentDeleteAction = createAsyncThunk<any, any>(
  "comment/subComment/delete",
  async (data) => {
    try {
      await axios.post(`/comment/subComment/delete`, data);
      return;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
