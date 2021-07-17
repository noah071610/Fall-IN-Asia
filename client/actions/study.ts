import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStudyPostForm } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const studyPostCreateAction = createAsyncThunk<any, any>("study/post", async (form) => {
  try {
    const response = await axios.post("/study", form);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const studyPostSearchAction = createAsyncThunk<any, any>("study/search", async (postId) => {
  try {
    const response = await axios.post(`/study?type=&postId=${postId}`);
    return response.data;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const studyPostDeleteAction = createAsyncThunk<
  any,
  { postId: number; password: string; userId: number }
>("study/delete", async (data) => {
  try {
    await axios.post(`/study/delete`, data);
    return;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});

export const studyPostEditAction = createAsyncThunk<any, IStudyPostForm>(
  "study/edit",
  async (form) => {
    try {
      const response = await axios.post("/study/edit", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
