import { createAsyncThunk } from "@reduxjs/toolkit";
import { IClubPostForm } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const getVisitClubAction = createAsyncThunk<any, string[]>("club/visit", async (form) => {
  try {
    const response = await axios.post("/club/visit", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostCreateAction = createAsyncThunk<any, IClubPostForm>(
  "club/post",
  async (form) => {
    try {
      const response = await axios.post("/club", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

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

export const clubPostEditAction = createAsyncThunk<any, IClubPostForm>(
  "club/edit",
  async (form) => {
    try {
      const response = await axios.post("/club/edit", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const clubPostEditConfirmAction = createAsyncThunk<
  any,
  { postId: number; password: string; userId: number }
>("club/confirm", async (data) => {
  try {
    const response = await axios.post(`/club/confirm`, data);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostLikeAction = createAsyncThunk<any, number>("club/like", async (clubPostId) => {
  try {
    const response = await axios.patch(`/club/like/${clubPostId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const clubPostDislikeAction = createAsyncThunk<any, number>(
  "club/dislike",
  async (clubPostId) => {
    try {
      const response = await axios.patch(`/club/dislike/${clubPostId}`);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
