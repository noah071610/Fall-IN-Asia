import { createSlice } from "@reduxjs/toolkit";
import { galleryPostCreateAction } from "actions/gallery";

export interface GalleryState {
  galleryPostCreateLoading: boolean;
  galleryPostCreateDone: boolean;
  galleryPostCreateError: boolean;
}

const initialState: GalleryState = {
  galleryPostCreateLoading: false,
  galleryPostCreateDone: false,
  galleryPostCreateError: false,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    galleryPostCreateClear(state) {
      state.galleryPostCreateLoading = false;
      state.galleryPostCreateDone = false;
      state.galleryPostCreateError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(galleryPostCreateAction.pending, (state) => {
        state.galleryPostCreateLoading = true;
      })
      .addCase(galleryPostCreateAction.fulfilled, (state) => {
        state.galleryPostCreateLoading = false;
        state.galleryPostCreateDone = true;
      })
      .addCase(galleryPostCreateAction.rejected, (state) => {
        state.galleryPostCreateLoading = false;
        state.galleryPostCreateError = true;
      }),
});
