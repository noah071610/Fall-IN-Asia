import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const articleCreateAction = createAsyncThunk<any, FormData>("article/post", async (form) => {
  try {
    const response = await axios.post("/article", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const articleDeleteAction = createAsyncThunk<any, number>(
  "article/delete",
  async (articleId) => {
    try {
      await axios.delete(`/article/${articleId}`);
      return;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const articleEditAction = createAsyncThunk<any, FormData>("article/edit", async (form) => {
  try {
    const response = await axios.post("/article/edit", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
