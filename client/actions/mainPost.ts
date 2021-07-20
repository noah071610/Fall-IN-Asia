import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const mainPostCreateAction = createAsyncThunk<any, any>("mainPost/post", async (form) => {
  try {
    const response = await axios.post("/mainPost", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const mainPostDeleteAction = createAsyncThunk<any, any>(
  "mainPost/delete",
  async (postId) => {
    try {
      await axios.delete(`/mainPost/${postId}`);
      return;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const mainPostEditAction = createAsyncThunk<any, any>("mainPost/edit", async (form) => {
  try {
    const response = await axios.post("/mainPost/edit", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

// export const mainPostConfirmAction = createAsyncThunk<
//   any,
//   { postId: number; password: string; userId: number }
// >("mainPost/confirm", async (data) => {
//   try {
//     const response = await axios.post(`/mainPost/confirm`, data);
//     return response.data;
//   } catch (error) {
//     toastErrorMessage(error);
//     throw error;
//   }
// });

export const mainPostLikeAction = createAsyncThunk<any, number>(
  "mainPost/like",
  async (mainPostId) => {
    try {
      const response = await axios.patch(`/mainPost/like/${mainPostId}`);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const mainPostDislikeAction = createAsyncThunk<any, number>(
  "mainPost/dislike",
  async (postId) => {
    try {
      const response = await axios.patch(`/mainPost/dislike/${postId}`);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
