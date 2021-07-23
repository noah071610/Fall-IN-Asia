import { IMarketPost } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  storyDislikeAction,
  storyLikeAction,
  storyPostCreateAction,
  storyPostDeleteAction,
  storyPostEditAction,
} from "actions/story";

export interface StoryState {
  storyPostCreateLoading: boolean;
  storyPostCreateDone: boolean;
  storyPostCreateError: boolean;
  storyPostDeleteLoading: boolean;
  storyPostDeleteDone: boolean;
  storyPostDeleteError: boolean;
  storyPostEditLoading: boolean;
  storyPostEditDone: boolean;
  storyPostEditError: boolean;
  storyLikeLoading: boolean;
  storyLikeDone: boolean;
  storyLikeError: boolean;
  storyDislikeLoading: boolean;
  storyDislikeDone: boolean;
  storyDislikeError: boolean;
}

const initialState: StoryState = {
  storyPostCreateLoading: false,
  storyPostCreateDone: false,
  storyPostCreateError: false,
  storyPostDeleteLoading: false,
  storyPostDeleteDone: false,
  storyPostDeleteError: false,
  storyPostEditLoading: false,
  storyPostEditDone: false,
  storyPostEditError: false,
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
    storyPostCreateClear(state) {
      state.storyPostCreateLoading = false;
      state.storyPostCreateDone = false;
      state.storyPostCreateError = false;
    },
    storyPostDeleteClear(state) {
      state.storyPostDeleteLoading = false;
      state.storyPostDeleteDone = false;
      state.storyPostDeleteError = false;
    },
    storyPostEditClear(state) {
      state.storyPostEditLoading = false;
      state.storyPostEditDone = false;
      state.storyPostEditError = false;
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
      .addCase(storyPostCreateAction.pending, (state) => {
        state.storyPostCreateLoading = true;
      })
      .addCase(storyPostCreateAction.fulfilled, (state) => {
        state.storyPostCreateLoading = false;
        state.storyPostCreateDone = true;
      })
      .addCase(storyPostCreateAction.rejected, (state) => {
        state.storyPostCreateLoading = false;
        state.storyPostCreateError = true;
      })
      .addCase(storyPostDeleteAction.pending, (state) => {
        state.storyPostDeleteLoading = true;
      })
      .addCase(storyPostDeleteAction.fulfilled, (state) => {
        state.storyPostDeleteLoading = false;
        state.storyPostDeleteDone = true;
      })
      .addCase(storyPostDeleteAction.rejected, (state) => {
        state.storyPostDeleteLoading = false;
        state.storyPostDeleteError = true;
      })
      .addCase(storyPostEditAction.pending, (state) => {
        state.storyPostEditLoading = true;
      })
      .addCase(storyPostEditAction.fulfilled, (state) => {
        state.storyPostEditLoading = false;
        state.storyPostEditDone = true;
      })
      .addCase(storyPostEditAction.rejected, (state) => {
        state.storyPostEditLoading = false;
        state.storyPostEditError = true;
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
