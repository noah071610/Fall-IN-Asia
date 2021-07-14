import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

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
