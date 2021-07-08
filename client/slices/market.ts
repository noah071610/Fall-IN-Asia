import { IPostForm } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  marketPostCreateAction,
  marketPostDeleteAction,
  marketPostEditAction,
  marketPostEditConfirmAction,
} from "actions/market";

export interface ClubState {
  marketPost: IPostForm | null;
  editPost: IPostForm | null;
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
  marketPost: null,
  editPost: null,
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
      .addCase(marketPostCreateAction.pending, (state) => {
        state.marketPostCreateLoading = true;
      })
      .addCase(marketPostCreateAction.fulfilled, (state) => {
        state.marketPostCreateLoading = false;
        state.marketPostCreateDone = true;
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
