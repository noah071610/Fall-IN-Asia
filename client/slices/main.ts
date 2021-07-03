import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@typings/db";

export interface MainState {
  onCommunityModal: boolean;
  onLoginModal: boolean;
  onSignupModal: boolean;
  onUserInfoModal: boolean;
  selectedGroup: IGroup | null;
}

const mainState: MainState = {
  onCommunityModal: false,
  onLoginModal: false,
  onSignupModal: false,
  onUserInfoModal: false,
  selectedGroup: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState: mainState,
  reducers: {
    closeModal(state) {
      state.onCommunityModal = false;
      state.onLoginModal = false;
      state.onSignupModal = false;
      state.onUserInfoModal = false;
    },
    toggleCommunityModal(state) {
      state.onCommunityModal = !state.onCommunityModal;
      state.onLoginModal = false;
      state.onSignupModal = false;
      state.onUserInfoModal = false;
    },
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onCommunityModal = false;
    },
    toggleSignupModal(state) {
      state.onSignupModal = !state.onSignupModal;
      state.onCommunityModal = false;
    },
    toggleUserInfoModal(state) {
      state.onUserInfoModal = !state.onUserInfoModal;
      state.onCommunityModal = false;
    },
    selectGroupForVote(state, action) {
      state.selectedGroup = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
