import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  onCommunityModal: boolean;
  onLoginModal: boolean;
  onSignupModal: boolean;
}

const mainState: MainState = {
  onCommunityModal: false,
  onLoginModal: false,
  onSignupModal: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState: mainState,
  reducers: {
    closeModal(state) {
      state.onCommunityModal = false;
      state.onLoginModal = false;
      state.onSignupModal = false;
    },
    toggleCommunityModal(state) {
      state.onCommunityModal = !state.onCommunityModal;
      state.onLoginModal = false;
      state.onSignupModal = false;
    },
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onCommunityModal = false;
    },
    toggleSignupModal(state) {
      state.onSignupModal = !state.onSignupModal;
      state.onCommunityModal = false;
    },
  },
  extraReducers: (builder) => {},
});
