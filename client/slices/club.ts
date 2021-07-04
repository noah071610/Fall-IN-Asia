import { IPostForm } from "@typings/db";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clubPostCreateAction, clubPostDeleteAction, clubPostEditAction } from "actions/club";

export interface ClubState {
  clubPost: IPostForm | null;
  editPost: IPostForm | null;
  clubPostCreateLoading: boolean;
  clubPostCreateDone: boolean;
  clubPostCreateError: boolean;
  clubPostDeleteLoading: boolean;
  clubPostDeleteDone: boolean;
  clubPostDeleteError: boolean;
  clubPostEditLoading: boolean;
  clubPostEditDone: boolean;
  clubPostEditError: boolean;
}

const initialState: ClubState = {
  clubPost: null,
  editPost: null,
  clubPostCreateLoading: false,
  clubPostCreateDone: false,
  clubPostCreateError: false,
  clubPostDeleteLoading: false,
  clubPostDeleteDone: false,
  clubPostDeleteError: false,
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
      .addCase(clubPostEditAction.pending, (state) => {
        state.clubPostEditLoading = true;
      })
      .addCase(clubPostEditAction.fulfilled, (state, action) => {
        state.clubPostEditLoading = false;
        state.clubPostEditDone = true;
        state.editPost = action.payload.data;
      })
      .addCase(clubPostEditAction.rejected, (state) => {
        state.clubPostEditLoading = false;
        state.clubPostEditError = true;
      }),
});
