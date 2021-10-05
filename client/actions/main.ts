import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataResponse } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const searchWordAction = createAsyncThunk("/search", async (searchWord: string) => {
  try {
    const response = await axios.get(`/search/${encodeURIComponent(searchWord)}`);
    return response.data as DataResponse;
  } catch (error) {
    toastErrorMessage(error);
    throw error;
  }
});
