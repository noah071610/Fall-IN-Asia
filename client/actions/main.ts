import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchWordAction = createAsyncThunk<any, string>("/search", async (searchWord) => {
  try {
    const response = await axios.get(`/search/${encodeURIComponent(searchWord)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
