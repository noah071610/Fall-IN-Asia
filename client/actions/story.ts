import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const storyCreateAction = createAsyncThunk<any, FormData>("story/post", async (form) => {
  try {
    const response = await axios.post("/story", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const storyDeleteAction = createAsyncThunk<
  any,
  { postId: number; password: string; userId: number }
>("story/delete", async (data) => {
  try {
    await axios.post(`/story/delete`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const storyEditAction = createAsyncThunk<any, any>("story/edit", async (form) => {
  try {
    const response = await axios.post("/story/edit", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const storyLikeAction = createAsyncThunk<any, number>("story/like", async (storyId) => {
  try {
    const response = await axios.patch(`/story/like/${storyId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const storyDislikeAction = createAsyncThunk<any, number>("story/dislike", async (postId) => {
  try {
    const response = await axios.patch(`/story/dislike/${postId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
