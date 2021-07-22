import { createSlice } from "@reduxjs/toolkit";

export interface MainState {
  currentPage: number;
  onCommunityModal: boolean;
  onLoginModal: boolean;
  onSignupModal: boolean;
}

const mainState: MainState = {
  currentPage: 1,
  onCommunityModal: false,
  onLoginModal: false,
  onSignupModal: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState: mainState,
  reducers: {
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onCommunityModal = false;
    },
    toggleSignupModal(state) {
      state.onSignupModal = !state.onSignupModal;
      state.onCommunityModal = false;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => builder,
});
