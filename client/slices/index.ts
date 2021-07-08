import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";

import { mainSlice } from "./main";
import { userSlice } from "./user";
import { gallerySlice } from "./gallery";
import { clubSlice } from "./club";
import { marketSlice } from "./market";

export const reducer = (state: any = {}, action: any) => {
  if (action.type === HYDRATE) {
    console.log("HYDRATE", action);
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    main: mainSlice.reducer,
    user: userSlice.reducer,
    club: clubSlice.reducer,
    market: marketSlice.reducer,
    gallery: gallerySlice.reducer,
  })(state, action);
};

export type RootState = ReturnType<typeof reducer>;
