import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorMessage } from "config";

export const galleryPostCreateAction = createAsyncThunk<any, any>(
  "/gallery/image",
  async (form) => {
    try {
      await axios.post("/gallery", form);
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);