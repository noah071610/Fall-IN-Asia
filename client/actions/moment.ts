import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const momentCreateAction = createAsyncThunk<any, FormData>("moment/post", async (form) => {
  try {
    const response = await axios.post("/moment", form);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const momentDeleteAction = createAsyncThunk<any, number>(
  "moment/delete",
  async (momentId) => {
    try {
      const response = await axios.delete(`/moment/${momentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const momentEditAction = createAsyncThunk<any, FormData>("moment/edit", async (form) => {
  try {
    const response = await axios.post("/moment/edit", form);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const momentLikeAction = createAsyncThunk<any, number>("moment/like", async (momentId) => {
  try {
    const response = await axios.patch(`/moment/like/${momentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const momentDislikeAction = createAsyncThunk<any, number>(
  "moment/dislike",
  async (momentId) => {
    try {
      const response = await axios.patch(`/moment/dislike/${momentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
