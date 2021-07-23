import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMainPostRequestForm } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const mainPostCreateAction = createAsyncThunk<any, IMainPostRequestForm>(
  "mainPost/post",
  async (form) => {
    try {
      const response = await axios.post("/mainPost", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const mainPostDeleteAction = createAsyncThunk<any, number>(
  "mainPost/delete",
  async (mainPostId) => {
    try {
      const response = await axios.delete(`/mainPost/${mainPostId}`);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const mainPostEditAction = createAsyncThunk<any, IMainPostRequestForm>(
  "mainPost/edit",
  async (form) => {
    try {
      const response = await axios.post("/mainPost/edit", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

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
