import { createSlice } from "@reduxjs/toolkit";
import { IMoment } from "@typings/db";
import {
  momentCreateAction,
  momentDeleteAction,
  momentDislikeAction,
  momentEditAction,
  momentLikeAction,
} from "actions/moment";
export interface MomentState {
  moment: IMoment | null;
  editPost: IMoment | null;
  visitCountry: any[] | null;
  postImage: string | null;
  getVisitClubLoading: boolean;
  getVisitClubDone: boolean;
  getVisitClubError: boolean;
  momentCreateLoading: boolean;
  momentCreateDone: boolean;
  momentCreateError: boolean;
  momentDeleteLoading: boolean;
  momentDeleteDone: boolean;
  momentDeleteError: boolean;
  momentEditConfirmLoading: boolean;
  momentEditConfirmDone: boolean;
  momentEditConfirmError: boolean;
  momentEditLoading: boolean;
  momentEditDone: boolean;
  momentEditError: boolean;
  momentLikeLoading: boolean;
  momentLikeDone: boolean;
  momentLikeError: boolean;
  momentDislikeLoading: boolean;
  momentDislikeDone: boolean;
  momentDislikeError: boolean;
}

const initialState: MomentState = {
  moment: null,
  editPost: null,
  postImage: null,
  visitCountry: null,
  getVisitClubLoading: false,
  getVisitClubDone: false,
  getVisitClubError: false,
  momentCreateLoading: false,
  momentCreateDone: false,
  momentCreateError: false,
  momentDeleteLoading: false,
  momentDeleteDone: false,
  momentDeleteError: false,
  momentEditConfirmLoading: false,
  momentEditConfirmDone: false,
  momentEditConfirmError: false,
  momentEditLoading: false,
  momentEditDone: false,
  momentEditError: false,
  momentLikeLoading: false,
  momentLikeDone: false,
  momentLikeError: false,
  momentDislikeLoading: false,
  momentDislikeDone: false,
  momentDislikeError: false,
};

export const momentSlice = createSlice({
  name: "moment",
  initialState,
  reducers: {
    momentCreateClear(state) {
      state.momentCreateLoading = false;
      state.momentCreateDone = false;
      state.momentCreateError = false;
    },
    momentDeleteClear(state) {
      state.momentDeleteLoading = false;
      state.momentDeleteDone = false;
      state.momentDeleteError = false;
    },
    momentEditClear(state) {
      state.momentEditLoading = false;
      state.momentEditDone = false;
      state.momentEditError = false;
      state.editPost = null;
    },
    momentEditSet(state, action) {
      state.editPost = action.payload.moment;
    },
    momentEditConfirmClear(state) {
      state.momentEditConfirmLoading = false;
      state.momentEditConfirmDone = false;
      state.momentEditConfirmError = false;
    },
    momentAddImage(state, action) {
      state.postImage = "<br/><p><img src='" + action.payload + "' alt='post_image'/></p>";
    },
    momentLikeClear(state) {
      state.momentLikeLoading = false;
      state.momentLikeDone = false;
      state.momentLikeError = false;
    },
    momentDislikeClear(state) {
      state.momentDislikeLoading = false;
      state.momentDislikeDone = false;
      state.momentDislikeError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(momentCreateAction.pending, (state) => {
        state.momentCreateLoading = true;
      })
      .addCase(momentCreateAction.fulfilled, (state) => {
        state.momentCreateLoading = false;
        state.momentCreateDone = true;
      })
      .addCase(momentCreateAction.rejected, (state) => {
        state.momentCreateLoading = false;
        state.momentCreateError = true;
      })
      .addCase(momentDeleteAction.pending, (state) => {
        state.momentDeleteLoading = true;
      })
      .addCase(momentDeleteAction.fulfilled, (state) => {
        state.momentDeleteLoading = false;
        state.momentDeleteDone = true;
      })
      .addCase(momentDeleteAction.rejected, (state) => {
        state.momentDeleteLoading = false;
        state.momentDeleteError = true;
      })
      .addCase(momentEditAction.pending, (state) => {
        state.momentEditLoading = true;
      })
      .addCase(momentEditAction.fulfilled, (state) => {
        state.momentEditLoading = false;
        state.momentEditDone = true;
      })
      .addCase(momentEditAction.rejected, (state) => {
        state.momentEditLoading = false;
        state.momentEditError = true;
      })
      .addCase(momentLikeAction.pending, (state) => {
        state.momentLikeLoading = true;
      })
      .addCase(momentLikeAction.fulfilled, (state) => {
        state.momentLikeLoading = false;
        state.momentLikeDone = true;
      })
      .addCase(momentLikeAction.rejected, (state) => {
        state.momentLikeLoading = false;
        state.momentLikeError = true;
      })
      .addCase(momentDislikeAction.pending, (state) => {
        state.momentDislikeLoading = true;
      })
      .addCase(momentDislikeAction.fulfilled, (state) => {
        state.momentDislikeLoading = false;
        state.momentDislikeDone = true;
      })
      .addCase(momentDislikeAction.rejected, (state) => {
        state.momentDislikeLoading = false;
        state.momentDislikeError = true;
      }),
});
