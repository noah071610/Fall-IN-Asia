import { createSlice } from "@reduxjs/toolkit";
import { studyPostCreateAction, studyPostDeleteAction, studyPostEditAction } from "actions/study";

export interface StudyState {
  studyPostCreateLoading: boolean;
  studyPostCreateDone: boolean;
  studyPostCreateError: boolean;
  studyPostDeleteLoading: boolean;
  studyPostDeleteDone: boolean;
  studyPostDeleteError: boolean;
  studyPostEditLoading: boolean;
  studyPostEditDone: boolean;
  studyPostEditError: boolean;
}

const initialState: StudyState = {
  studyPostCreateLoading: false,
  studyPostCreateDone: false,
  studyPostCreateError: false,
  studyPostDeleteLoading: false,
  studyPostDeleteDone: false,
  studyPostDeleteError: false,
  studyPostEditLoading: false,
  studyPostEditDone: false,
  studyPostEditError: false,
};

export const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {
    studyPostCreateClear(state) {
      state.studyPostCreateLoading = false;
      state.studyPostCreateDone = false;
      state.studyPostCreateError = false;
    },
    studyPostDeleteClear(state) {
      state.studyPostDeleteLoading = false;
      state.studyPostDeleteDone = false;
      state.studyPostDeleteError = false;
    },
    studyPostEditClear(state) {
      state.studyPostEditLoading = false;
      state.studyPostEditDone = false;
      state.studyPostEditError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(studyPostCreateAction.pending, (state) => {
        state.studyPostCreateLoading = true;
      })
      .addCase(studyPostCreateAction.fulfilled, (state) => {
        state.studyPostCreateLoading = false;
        state.studyPostCreateDone = true;
      })
      .addCase(studyPostCreateAction.rejected, (state) => {
        state.studyPostCreateLoading = false;
        state.studyPostCreateError = true;
      })
      .addCase(studyPostDeleteAction.pending, (state) => {
        state.studyPostDeleteLoading = true;
      })
      .addCase(studyPostDeleteAction.fulfilled, (state) => {
        state.studyPostDeleteLoading = false;
        state.studyPostDeleteDone = true;
      })
      .addCase(studyPostDeleteAction.rejected, (state) => {
        state.studyPostDeleteLoading = false;
        state.studyPostDeleteError = true;
      })
      .addCase(studyPostEditAction.pending, (state) => {
        state.studyPostEditLoading = true;
      })
      .addCase(studyPostEditAction.fulfilled, (state) => {
        state.studyPostEditLoading = false;
        state.studyPostEditDone = true;
      })
      .addCase(studyPostEditAction.rejected, (state) => {
        state.studyPostEditLoading = false;
        state.studyPostEditError = true;
      }),
});
