import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const commentCreateAction = createAsyncThunk<any, any>("comment/create", async (form) => {
  try {
    await axios.post(`/comment`, form);
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
  async (form) => {
    try {
      await axios.post(`/comment/subComment`, form);
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
