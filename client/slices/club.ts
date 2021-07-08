import { IPostForm } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  clubPostCreateAction,
  clubPostDeleteAction,
  clubPostEditAction,
  clubPostEditConfirmAction,
} from "actions/club";

export interface ClubState {
  clubPost: IPostForm | null;
  editPost: IPostForm | null;
  postImage: string | null;
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
}

const initialState: ClubState = {
  clubPost: null,
  editPost: null,
  postImage: null,
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
  },
  extraReducers: (builder) =>
    builder
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
      }),
});
