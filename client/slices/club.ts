import { IClubPostForm } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  clubPostCreateAction,
  clubPostDeleteAction,
  clubPostDislikeAction,
  clubPostEditAction,
  clubPostEditConfirmAction,
  clubPostLikeAction,
  getVisitClubAction,
} from "actions/club";

export interface ClubState {
  clubPost: IClubPostForm | null;
  editPost: IClubPostForm | null;
  visitClub: any[] | null;
  postImage: string | null;
  getVisitClubLoading: boolean;
  getVisitClubDone: boolean;
  getVisitClubError: boolean;
  clubPostCreateLoading: boolean;
  clubPostCreateDone: boolean;
  clubPostCreateError: boolean;
  clubPostDeleteLoading: boolean;
  clubPostDeleteDone: boolean;
  clubPostDeleteError: boolean;
  clubPostEditConfirmLoading: boolean;
  clubPostEditConfirmDone: boolean;
  clubPostEditConfirmError: boolean;
  clubPostEditLoading: boolean;
  clubPostEditDone: boolean;
  clubPostEditError: boolean;
  clubPostLikeLoading: boolean;
  clubPostLikeDone: boolean;
  clubPostLikeError: boolean;
  clubPostDislikeLoading: boolean;
  clubPostDislikeDone: boolean;
  clubPostDislikeError: boolean;
}

const initialState: ClubState = {
  clubPost: null,
  editPost: null,
  postImage: null,
  visitClub: null,
  getVisitClubLoading: false,
  getVisitClubDone: false,
  getVisitClubError: false,
  clubPostCreateLoading: false,
  clubPostCreateDone: false,
  clubPostCreateError: false,
  clubPostDeleteLoading: false,
  clubPostDeleteDone: false,
  clubPostDeleteError: false,
  clubPostEditConfirmLoading: false,
  clubPostEditConfirmDone: false,
  clubPostEditConfirmError: false,
  clubPostEditLoading: false,
  clubPostEditDone: false,
  clubPostEditError: false,
  clubPostLikeLoading: false,
  clubPostLikeDone: false,
  clubPostLikeError: false,
  clubPostDislikeLoading: false,
  clubPostDislikeDone: false,
  clubPostDislikeError: false,
};

export const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    clubPostCreateClear(state) {
      state.clubPostCreateLoading = false;
      state.clubPostCreateDone = false;
      state.clubPostCreateError = false;
    },
    clubPostDeleteClear(state) {
      state.clubPostDeleteLoading = false;
      state.clubPostDeleteDone = false;
      state.clubPostDeleteError = false;
    },
    clubPostEditClear(state) {
      state.clubPostEditLoading = false;
      state.clubPostEditDone = false;
      state.clubPostEditError = false;
    },
    clubPostEditConfirmClear(state) {
      state.clubPostEditConfirmLoading = false;
      state.clubPostEditConfirmDone = false;
      state.clubPostEditConfirmError = false;
    },
    clubPostAddImage(state, action) {
      state.postImage = "<br/><p><img src='" + action.payload + "' alt='post_image'/></p>";
    },
    clubPostLikeClear(state) {
      state.clubPostLikeLoading = false;
      state.clubPostLikeDone = false;
      state.clubPostLikeError = false;
    },
    clubPostDislikeClear(state) {
      state.clubPostDislikeLoading = false;
      state.clubPostDislikeDone = false;
      state.clubPostDislikeError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getVisitClubAction.pending, (state) => {
        state.getVisitClubLoading = true;
      })
      .addCase(getVisitClubAction.fulfilled, (state, action) => {
        state.getVisitClubLoading = false;
        state.getVisitClubDone = true;
        state.visitClub = action.payload.data;
      })
      .addCase(getVisitClubAction.rejected, (state) => {
        state.getVisitClubLoading = false;
        state.getVisitClubError = true;
      })
      .addCase(clubPostCreateAction.pending, (state) => {
        state.clubPostCreateLoading = true;
      })
      .addCase(clubPostCreateAction.fulfilled, (state) => {
        state.clubPostCreateLoading = false;
        state.clubPostCreateDone = true;
      })
      .addCase(clubPostCreateAction.rejected, (state) => {
        state.clubPostCreateLoading = false;
        state.clubPostCreateError = true;
      })
      .addCase(clubPostDeleteAction.pending, (state) => {
        state.clubPostDeleteLoading = true;
      })
      .addCase(clubPostDeleteAction.fulfilled, (state) => {
        state.clubPostDeleteLoading = false;
        state.clubPostDeleteDone = true;
      })
      .addCase(clubPostDeleteAction.rejected, (state) => {
        state.clubPostDeleteLoading = false;
        state.clubPostDeleteError = true;
      })
      .addCase(clubPostEditConfirmAction.pending, (state) => {
        state.clubPostEditConfirmLoading = true;
      })
      .addCase(clubPostEditConfirmAction.fulfilled, (state, action) => {
        state.clubPostEditConfirmLoading = false;
        state.clubPostEditConfirmDone = true;
        state.editPost = action.payload.data;
      })
      .addCase(clubPostEditConfirmAction.rejected, (state) => {
        state.clubPostEditConfirmLoading = false;
        state.clubPostEditConfirmError = true;
      })
      .addCase(clubPostEditAction.pending, (state) => {
        state.clubPostEditLoading = true;
      })
      .addCase(clubPostEditAction.fulfilled, (state) => {
        state.clubPostEditLoading = false;
        state.clubPostEditDone = true;
      })
      .addCase(clubPostEditAction.rejected, (state) => {
        state.clubPostEditLoading = false;
        state.clubPostEditError = true;
      })
      .addCase(clubPostLikeAction.pending, (state) => {
        state.clubPostLikeLoading = true;
      })
      .addCase(clubPostLikeAction.fulfilled, (state, action) => {
        state.clubPostLikeLoading = false;
        state.clubPostLikeDone = true;
      })
      .addCase(clubPostLikeAction.rejected, (state) => {
        state.clubPostLikeLoading = false;
        state.clubPostLikeError = true;
      })
      .addCase(clubPostDislikeAction.pending, (state) => {
        state.clubPostDislikeLoading = true;
      })
      .addCase(clubPostDislikeAction.fulfilled, (state, action) => {
        state.clubPostDislikeLoading = false;
        state.clubPostDislikeDone = true;
      })
      .addCase(clubPostDislikeAction.rejected, (state) => {
        state.clubPostDislikeLoading = false;
        state.clubPostDislikeError = true;
      }),
});
