import { createSlice } from "@reduxjs/toolkit";
import {
  commentCreateAction,
  commentDeleteAction,
  subCommentCreateAction,
  subCommentDeleteAction,
} from "actions/comment";

export interface CommentState {
  mentionComment: any;
  commentCreateLoading: boolean;
  commentCreateDone: boolean;
  commentCreateError: boolean;
  commentDeleteLoading: boolean;
  commentDeleteDone: boolean;
  commentDeleteError: boolean;
  subCommentCreateLoading: boolean;
  subCommentCreateDone: boolean;
  subCommentCreateError: boolean;
  subCommentDeleteLoading: boolean;
  subCommentDeleteDone: boolean;
  subCommentDeleteError: boolean;
}

const initialState: CommentState = {
  mentionComment: null,
  commentCreateLoading: false,
  commentCreateDone: false,
  commentCreateError: false,
  commentDeleteLoading: false,
  commentDeleteDone: false,
  commentDeleteError: false,
  subCommentCreateLoading: false,
  subCommentCreateDone: false,
  subCommentCreateError: false,
  subCommentDeleteLoading: false,
  subCommentDeleteDone: false,
  subCommentDeleteError: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentCreateClear(state) {
      state.commentCreateLoading = false;
      state.commentCreateDone = false;
      state.commentCreateError = false;
    },
    commentDeleteClear(state) {
      state.commentDeleteLoading = false;
      state.commentDeleteDone = false;
      state.commentDeleteError = false;
    },
    subCommentCreateClear(state) {
      state.subCommentCreateLoading = false;
      state.subCommentCreateDone = false;
      state.subCommentCreateError = false;
    },
    subCommentDeleteClear(state) {
      state.subCommentDeleteLoading = false;
      state.subCommentDeleteDone = false;
      state.subCommentDeleteError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(commentCreateAction.pending, (state) => {
        state.commentCreateLoading = true;
      })
      .addCase(commentCreateAction.fulfilled, (state) => {
        state.commentCreateLoading = false;
        state.commentCreateDone = true;
      })
      .addCase(commentCreateAction.rejected, (state) => {
        state.commentCreateLoading = false;
        state.commentCreateError = true;
      })
      .addCase(commentDeleteAction.pending, (state) => {
        state.commentDeleteLoading = true;
      })
      .addCase(commentDeleteAction.fulfilled, (state) => {
        state.commentDeleteLoading = false;
        state.commentDeleteDone = true;
      })
      .addCase(commentDeleteAction.rejected, (state) => {
        state.commentDeleteLoading = false;
        state.commentDeleteError = true;
      })
      .addCase(subCommentCreateAction.pending, (state) => {
        state.subCommentCreateLoading = true;
      })
      .addCase(subCommentCreateAction.fulfilled, (state, action) => {
        state.subCommentCreateLoading = false;
        state.subCommentCreateDone = true;
      })
      .addCase(subCommentCreateAction.rejected, (state) => {
        state.subCommentCreateLoading = false;
        state.subCommentCreateError = true;
      })
      .addCase(subCommentDeleteAction.pending, (state) => {
        state.subCommentDeleteLoading = true;
      })
      .addCase(subCommentDeleteAction.fulfilled, (state, action) => {
        state.subCommentDeleteLoading = false;
        state.subCommentDeleteDone = true;
      })
      .addCase(subCommentDeleteAction.rejected, (state) => {
        state.subCommentDeleteLoading = false;
        state.subCommentDeleteError = true;
      }),
});
