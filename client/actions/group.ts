import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const getGroupsWithScoreAction = createAsyncThunk<any, boolean>(
  "/group/score",
  async (isRefresh) => {
    try {
      const response = await axios.get("/group/score");
      return { data: response.data, isRefresh };
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const groupVoteForStyleAction = createAsyncThunk<any, { style: string; groupId: number }>(
  "/group/vote",
  async (form) => {
    try {
      const response = await axios.patch("/group/vote", form);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);

export const groupVoteUndoAction = createAsyncThunk<any, { style: string; groupId: number }>(
  "/group/vote/undo",
  async (data) => {
    try {
      const response = await axios.delete(`/group/vote/${data.style}/${data.groupId}`);
      return response.data;
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
