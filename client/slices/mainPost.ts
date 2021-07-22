import { createSlice } from "@reduxjs/toolkit";
import { IMainPost } from "@typings/db";
import {
  mainPostCreateAction,
  mainPostDeleteAction,
  mainPostDislikeAction,
  mainPostEditAction,
  mainPostLikeAction,
} from "actions/mainPost";
export interface MainPostState {
  mainPost: IMainPost | null;
  editPost: IMainPost | null;
  visitCountry: any[] | null;
  postImage: string | null;
  getVisitClubLoading: boolean;
  getVisitClubDone: boolean;
  getVisitClubError: boolean;
  mainPostCreateLoading: boolean;
  mainPostCreateDone: boolean;
  mainPostCreateError: boolean;
  mainPostDeleteLoading: boolean;
  mainPostDeleteDone: boolean;
  mainPostDeleteError: boolean;
  mainPostEditConfirmLoading: boolean;
  mainPostEditConfirmDone: boolean;
  mainPostEditConfirmError: boolean;
  mainPostEditLoading: boolean;
  mainPostEditDone: boolean;
  mainPostEditError: boolean;
  mainPostLikeLoading: boolean;
  mainPostLikeDone: boolean;
  mainPostLikeError: boolean;
  mainPostDislikeLoading: boolean;
  mainPostDislikeDone: boolean;
  mainPostDislikeError: boolean;
}

const initialState: MainPostState = {
  mainPost: null,
  editPost: null,
  postImage: null,
  visitCountry: null,
  getVisitClubLoading: false,
  getVisitClubDone: false,
  getVisitClubError: false,
  mainPostCreateLoading: false,
  mainPostCreateDone: false,
  mainPostCreateError: false,
  mainPostDeleteLoading: false,
  mainPostDeleteDone: false,
  mainPostDeleteError: false,
  mainPostEditConfirmLoading: false,
  mainPostEditConfirmDone: false,
  mainPostEditConfirmError: false,
  mainPostEditLoading: false,
  mainPostEditDone: false,
  mainPostEditError: false,
  mainPostLikeLoading: false,
  mainPostLikeDone: false,
  mainPostLikeError: false,
  mainPostDislikeLoading: false,
  mainPostDislikeDone: false,
  mainPostDislikeError: false,
};

export const mainPostSlice = createSlice({
  name: "mainPost",
  initialState,
  reducers: {
    mainPostCreateClear(state) {
      state.mainPostCreateLoading = false;
      state.mainPostCreateDone = false;
      state.mainPostCreateError = false;
    },
    mainPostDeleteClear(state) {
      state.mainPostDeleteLoading = false;
      state.mainPostDeleteDone = false;
      state.mainPostDeleteError = false;
    },
    mainPostEditClear(state) {
      state.mainPostEditLoading = false;
      state.mainPostEditDone = false;
      state.mainPostEditError = false;
      state.editPost = null;
    },
    mainPostEditSet(state, action) {
      state.editPost = action.payload.mainPost;
    },
    mainPostEditConfirmClear(state) {
      state.mainPostEditConfirmLoading = false;
      state.mainPostEditConfirmDone = false;
      state.mainPostEditConfirmError = false;
    },
    mainPostAddImage(state, action) {
      state.postImage = "<br/><p><img src='" + action.payload + "' alt='post_image'/></p>";
    },
    mainPostLikeClear(state) {
      state.mainPostLikeLoading = false;
      state.mainPostLikeDone = false;
      state.mainPostLikeError = false;
    },
    mainPostDislikeClear(state) {
      state.mainPostDislikeLoading = false;
      state.mainPostDislikeDone = false;
      state.mainPostDislikeError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(mainPostCreateAction.pending, (state) => {
        state.mainPostCreateLoading = true;
      })
      .addCase(mainPostCreateAction.fulfilled, (state) => {
        state.mainPostCreateLoading = false;
        state.mainPostCreateDone = true;
      })
      .addCase(mainPostCreateAction.rejected, (state) => {
        state.mainPostCreateLoading = false;
        state.mainPostCreateError = true;
      })
      .addCase(mainPostDeleteAction.pending, (state) => {
        state.mainPostDeleteLoading = true;
      })
      .addCase(mainPostDeleteAction.fulfilled, (state) => {
        state.mainPostDeleteLoading = false;
        state.mainPostDeleteDone = true;
      })
      .addCase(mainPostDeleteAction.rejected, (state) => {
        state.mainPostDeleteLoading = false;
        state.mainPostDeleteError = true;
      })
      .addCase(mainPostEditAction.pending, (state) => {
        state.mainPostEditLoading = true;
      })
      .addCase(mainPostEditAction.fulfilled, (state) => {
        state.mainPostEditLoading = false;
        state.mainPostEditDone = true;
      })
      .addCase(mainPostEditAction.rejected, (state) => {
        state.mainPostEditLoading = false;
        state.mainPostEditError = true;
      })
      .addCase(mainPostLikeAction.pending, (state) => {
        state.mainPostLikeLoading = true;
      })
      .addCase(mainPostLikeAction.fulfilled, (state) => {
        state.mainPostLikeLoading = false;
        state.mainPostLikeDone = true;
      })
      .addCase(mainPostLikeAction.rejected, (state) => {
        state.mainPostLikeLoading = false;
        state.mainPostLikeError = true;
      })
      .addCase(mainPostDislikeAction.pending, (state) => {
        state.mainPostDislikeLoading = true;
      })
      .addCase(mainPostDislikeAction.fulfilled, (state) => {
        state.mainPostDislikeLoading = false;
        state.mainPostDislikeDone = true;
      })
      .addCase(mainPostDislikeAction.rejected, (state) => {
        state.mainPostDislikeLoading = false;
        state.mainPostDislikeError = true;
      }),
});
