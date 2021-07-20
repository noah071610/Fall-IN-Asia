import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import { mainSlice } from "./main";
import { userSlice } from "./user";
import { gallerySlice } from "./gallery";
import { mainPostSlice } from "./mainPost";
import { marketSlice } from "./market";
import { studySlice } from "./study";
import { commentSlice } from "./comment";

export const reducer = (state: any = {}, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    main: mainSlice.reducer,
    user: userSlice.reducer,
    mainPost: mainPostSlice.reducer,
    market: marketSlice.reducer,
    gallery: gallerySlice.reducer,
    study: studySlice.reducer,
    comment: commentSlice.reducer,
  })(state, action);
};

export type RootState = ReturnType<typeof reducer>;
