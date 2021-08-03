import { IArticle } from "@typings/db";
import { createSlice } from "@reduxjs/toolkit";
import { articleCreateAction, articleDeleteAction, articleEditAction } from "actions/article";

export interface articleState {
  editArticle: IArticle | null;
  articleCreateLoading: boolean;
  articleCreateDone: boolean;
  articleCreateError: boolean;
  articleDeleteLoading: boolean;
  articleDeleteDone: boolean;
  articleDeleteError: boolean;
  articleEditLoading: boolean;
  articleEditDone: boolean;
  articleEditError: boolean;
}

const initialState: articleState = {
  editArticle: null,
  articleCreateLoading: false,
  articleCreateDone: false,
  articleCreateError: false,
  articleDeleteLoading: false,
  articleDeleteDone: false,
  articleDeleteError: false,
  articleEditLoading: false,
  articleEditDone: false,
  articleEditError: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleCreateClear(state) {
      state.articleCreateLoading = false;
      state.articleCreateDone = false;
      state.articleCreateError = false;
    },
    articleDeleteClear(state) {
      state.articleDeleteLoading = false;
      state.articleDeleteDone = false;
      state.articleDeleteError = false;
    },
    articleEditSet(state, action) {
      state.editArticle = action.payload.article;
    },
    editArticleClear(state) {
      state.editArticle = null;
    },
    articleEditClear(state) {
      state.articleEditLoading = false;
      state.articleEditDone = false;
      state.articleEditError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(articleCreateAction.pending, (state) => {
        state.articleCreateLoading = true;
      })
      .addCase(articleCreateAction.fulfilled, (state) => {
        state.articleCreateLoading = false;
        state.articleCreateDone = true;
      })
      .addCase(articleCreateAction.rejected, (state) => {
        state.articleCreateLoading = false;
        state.articleCreateError = true;
      })
      .addCase(articleDeleteAction.pending, (state) => {
        state.articleDeleteLoading = true;
      })
      .addCase(articleDeleteAction.fulfilled, (state) => {
        state.articleDeleteLoading = false;
        state.articleDeleteDone = true;
      })
      .addCase(articleDeleteAction.rejected, (state) => {
        state.articleDeleteLoading = false;
        state.articleDeleteError = true;
      })
      .addCase(articleEditAction.pending, (state) => {
        state.articleEditLoading = true;
      })
      .addCase(articleEditAction.fulfilled, (state) => {
        state.articleEditLoading = false;
        state.articleEditDone = true;
      })
      .addCase(articleEditAction.rejected, (state) => {
        state.articleEditLoading = false;
        state.articleEditError = true;
      }),
});
