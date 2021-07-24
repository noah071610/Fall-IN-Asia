import { IMarketPost } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  storyDislikeAction,
  storyLikeAction,
  storyCreateAction,
  storyDeleteAction,
  storyEditAction,
} from "actions/story";

export interface StoryState {
  storyCreateLoading: boolean;
  storyCreateDone: boolean;
  storyCreateError: boolean;
  storyDeleteLoading: boolean;
  storyDeleteDone: boolean;
  storyDeleteError: boolean;
  storyEditLoading: boolean;
  storyEditDone: boolean;
  storyEditError: boolean;
  storyLikeLoading: boolean;
  storyLikeDone: boolean;
  storyLikeError: boolean;
  storyDislikeLoading: boolean;
  storyDislikeDone: boolean;
  storyDislikeError: boolean;
}

const initialState: StoryState = {
  storyCreateLoading: false,
  storyCreateDone: false,
  storyCreateError: false,
  storyDeleteLoading: false,
  storyDeleteDone: false,
  storyDeleteError: false,
  storyEditLoading: false,
  storyEditDone: false,
  storyEditError: false,
  storyLikeLoading: false,
  storyLikeDone: false,
  storyLikeError: false,
  storyDislikeLoading: false,
  storyDislikeDone: false,
  storyDislikeError: false,
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    storyCreateClear(state) {
      state.storyCreateLoading = false;
      state.storyCreateDone = false;
      state.storyCreateError = false;
    },
    storyDeleteClear(state) {
      state.storyDeleteLoading = false;
      state.storyDeleteDone = false;
      state.storyDeleteError = false;
    },
    storyEditClear(state) {
      state.storyEditLoading = false;
      state.storyEditDone = false;
      state.storyEditError = false;
    },
    storyLikeClear(state) {
      state.storyLikeLoading = false;
      state.storyLikeDone = false;
      state.storyLikeError = false;
    },
    storyDislikeClear(state) {
      state.storyDislikeLoading = false;
      state.storyDislikeDone = false;
      state.storyDislikeError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(storyCreateAction.pending, (state) => {
        state.storyCreateLoading = true;
      })
      .addCase(storyCreateAction.fulfilled, (state) => {
        state.storyCreateLoading = false;
        state.storyCreateDone = true;
      })
      .addCase(storyCreateAction.rejected, (state) => {
        state.storyCreateLoading = false;
        state.storyCreateError = true;
      })
      .addCase(storyDeleteAction.pending, (state) => {
        state.storyDeleteLoading = true;
      })
      .addCase(storyDeleteAction.fulfilled, (state) => {
        state.storyDeleteLoading = false;
        state.storyDeleteDone = true;
      })
      .addCase(storyDeleteAction.rejected, (state) => {
        state.storyDeleteLoading = false;
        state.storyDeleteError = true;
      })
      .addCase(storyEditAction.pending, (state) => {
        state.storyEditLoading = true;
      })
      .addCase(storyEditAction.fulfilled, (state) => {
        state.storyEditLoading = false;
        state.storyEditDone = true;
      })
      .addCase(storyEditAction.rejected, (state) => {
        state.storyEditLoading = false;
        state.storyEditError = true;
      })
      .addCase(storyLikeAction.pending, (state) => {
        state.storyLikeLoading = true;
      })
      .addCase(storyLikeAction.fulfilled, (state) => {
        state.storyLikeLoading = false;
        state.storyLikeDone = true;
      })
      .addCase(storyLikeAction.rejected, (state) => {
        state.storyLikeLoading = false;
        state.storyLikeError = true;
      })
      .addCase(storyDislikeAction.pending, (state) => {
        state.storyDislikeLoading = true;
      })
      .addCase(storyDislikeAction.fulfilled, (state) => {
        state.storyDislikeLoading = false;
        state.storyDislikeDone = true;
      })
      .addCase(storyDislikeAction.rejected, (state) => {
        state.storyDislikeLoading = false;
        state.storyDislikeError = true;
      }),
});
