import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const groupVoteForStyleAction = createAsyncThunk<any, { style: string; groupId: number }>(
  "/group/vote",
  async (form) => {
    try {
      await axios.patch("/group/vote", form);
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
