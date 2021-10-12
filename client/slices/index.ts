import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import { mainSlice, MainState } from "./main";
import { userSlice, UserState } from "./user";

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
  })(state, action);
};

export type RootState = {
  main: MainState;
  user: UserState;
};
