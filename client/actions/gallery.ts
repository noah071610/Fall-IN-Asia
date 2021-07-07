import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignUpForm, IUser } from "@typings/db";
import axios from "axios";
import { toastErrorMessage } from "config";

export const galleryPostCreateAction = createAsyncThunk<any, any>(
  "/gallery/image",
  async (form) => {
    try {
      const response = await axios.post("/gallery", form);
      console.log(response.data);
    } catch (error) {
      toastErrorMessage(error);
      throw error;
    }
  }
);
