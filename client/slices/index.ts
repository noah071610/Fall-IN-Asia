import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import { mainSlice } from "./main";
import { userSlice } from "./user";
import { momentSlice } from "./moment";
import { storySlice } from "./story";
import { studySlice } from "./study";
import { commentSlice } from "./comment";
import { articleSlice } from "./article";

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
    moment: momentSlice.reducer,
    story: storySlice.reducer,
    study: studySlice.reducer,
    comment: commentSlice.reducer,
    article: articleSlice.reducer,
  })(state, action);
};

export type RootState = ReturnType<typeof reducer>;
