import { IMarketPost } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getMarketPostsAction,
  getMarketSearchPostsAction,
  getMarketTypePostsAction,
  marketPostCreateAction,
  marketPostDeleteAction,
  marketPostEditAction,
  marketPostEditConfirmAction,
} from "actions/market";

export interface ClubState {
  marketPosts: IMarketPost[] | null;
  marketPost: IMarketPost | null;
  editPost: IMarketPost | null;
  getMarketPostsLoading: boolean;
  getMarketPostsDone: boolean;
  getMarketPostsError: boolean;
  getMarketTypePostsLoading: boolean;
  getMarketTypePostsDone: boolean;
  getMarketTypePostsError: boolean;
  getMarketSearchPostsLoading: boolean;
  getMarketSearchPostsDone: boolean;
  getMarketSearchPostsError: boolean;
  marketPostCreateLoading: boolean;
  marketPostCreateDone: boolean;
  marketPostCreateError: boolean;
  marketPostDeleteLoading: boolean;
  marketPostDeleteDone: boolean;
  marketPostDeleteError: boolean;
  marketPostEditConfirmLoading: boolean;
  marketPostEditConfirmDone: boolean;
  marketPostEditConfirmError: boolean;
  marketPostEditLoading: boolean;
  marketPostEditDone: boolean;
  marketPostEditError: boolean;
}

const initialState: ClubState = {
  marketPosts: null,
  marketPost: null,
  editPost: null,
  getMarketPostsLoading: false,
  getMarketPostsDone: false,
  getMarketPostsError: false,
  getMarketTypePostsLoading: false,
  getMarketTypePostsDone: false,
  getMarketTypePostsError: false,
  getMarketSearchPostsLoading: false,
  getMarketSearchPostsDone: false,
  getMarketSearchPostsError: false,
  marketPostCreateLoading: false,
  marketPostCreateDone: false,
  marketPostCreateError: false,
  marketPostDeleteLoading: false,
  marketPostDeleteDone: false,
  marketPostDeleteError: false,
  marketPostEditConfirmLoading: false,
  marketPostEditConfirmDone: false,
  marketPostEditConfirmError: false,
  marketPostEditLoading: false,
  marketPostEditDone: false,
  marketPostEditError: false,
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    marketPostCreateClear(state) {
      state.marketPostCreateLoading = false;
      state.marketPostCreateDone = false;
      state.marketPostCreateError = false;
    },
    marketPostDeleteClear(state) {
      state.marketPostDeleteLoading = false;
      state.marketPostDeleteDone = false;
      state.marketPostDeleteError = false;
    },
    marketPostEditClear(state) {
      state.marketPostEditLoading = false;
      state.marketPostEditDone = false;
      state.marketPostEditError = false;
    },
    marketPostEditConfirmClear(state) {
      state.marketPostEditConfirmLoading = false;
      state.marketPostEditConfirmDone = false;
      state.marketPostEditConfirmError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMarketPostsAction.pending, (state) => {
        state.getMarketPostsLoading = true;
      })
      .addCase(getMarketPostsAction.fulfilled, (state, action) => {
        state.getMarketPostsLoading = false;
        state.getMarketPostsDone = true;
        state.marketPosts = action.payload.data;
      })
      .addCase(getMarketPostsAction.rejected, (state) => {
        state.getMarketPostsLoading = false;
        state.getMarketPostsError = true;
      })
      .addCase(getMarketTypePostsAction.pending, (state) => {
        state.getMarketTypePostsLoading = true;
      })
      .addCase(getMarketTypePostsAction.fulfilled, (state, action) => {
        state.getMarketTypePostsLoading = false;
        state.getMarketTypePostsDone = true;
        state.marketPosts = action.payload.data;
      })
      .addCase(getMarketTypePostsAction.rejected, (state) => {
        state.getMarketTypePostsLoading = false;
        state.getMarketTypePostsError = true;
      })
      .addCase(getMarketSearchPostsAction.pending, (state) => {
        state.getMarketSearchPostsLoading = true;
      })
      .addCase(getMarketSearchPostsAction.fulfilled, (state, action) => {
        state.getMarketSearchPostsLoading = false;
        state.getMarketSearchPostsDone = true;
        state.marketPosts = action.payload.data;
      })
      .addCase(getMarketSearchPostsAction.rejected, (state) => {
        state.getMarketSearchPostsLoading = false;
        state.getMarketSearchPostsError = true;
      })
      .addCase(marketPostCreateAction.rejected, (state) => {
        state.marketPostCreateLoading = false;
        state.marketPostCreateError = true;
      })
      .addCase(marketPostDeleteAction.pending, (state) => {
        state.marketPostDeleteLoading = true;
      })
      .addCase(marketPostDeleteAction.fulfilled, (state) => {
        state.marketPostDeleteLoading = false;
        state.marketPostDeleteDone = true;
      })
      .addCase(marketPostDeleteAction.rejected, (state) => {
        state.marketPostDeleteLoading = false;
        state.marketPostDeleteError = true;
      })
      .addCase(marketPostEditConfirmAction.pending, (state) => {
        state.marketPostEditConfirmLoading = true;
      })
      .addCase(marketPostEditConfirmAction.fulfilled, (state, action) => {
        state.marketPostEditConfirmLoading = false;
        state.marketPostEditConfirmDone = true;
        state.editPost = action.payload.data;
      })
      .addCase(marketPostEditConfirmAction.rejected, (state) => {
        state.marketPostEditConfirmLoading = false;
        state.marketPostEditConfirmError = true;
      })
      .addCase(marketPostEditAction.pending, (state) => {
        state.marketPostEditLoading = true;
      })
      .addCase(marketPostEditAction.fulfilled, (state) => {
        state.marketPostEditLoading = false;
        state.marketPostEditDone = true;
      })
      .addCase(marketPostEditAction.rejected, (state) => {
        state.marketPostEditLoading = false;
        state.marketPostEditError = true;
      }),
});
