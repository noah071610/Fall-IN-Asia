import { createSlice } from "@reduxjs/toolkit";

export interface MainState {
  onProfilePopUp: boolean;
  onNoticePopUp: boolean;
  onSearchPopUp: boolean;
  onLoginModal: boolean;
  onIconCropperModal: boolean;
}

const mainState: MainState = {
  onProfilePopUp: false,
  onNoticePopUp: false,
  onSearchPopUp: false,
  onLoginModal: false,
  onIconCropperModal: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState: mainState,
  reducers: {
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
    },
    toggleIconCropperModal(state) {
      state.onIconCropperModal = !state.onIconCropperModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
    },
    toggleProfilePopUp(state) {
      state.onProfilePopUp = !state.onProfilePopUp;
      state.onSearchPopUp = false;
      state.onNoticePopUp = false;
    },
    toggleNoticePopUp(state) {
      state.onNoticePopUp = !state.onNoticePopUp;
      state.onLoginModal = false;
      state.onSearchPopUp = false;
    },
    toggleSearchPopUp(state) {
      state.onSearchPopUp = !state.onSearchPopUp;
      state.onLoginModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
    },
    closeProfilePopUp(state) {
      state.onProfilePopUp = false;
    },
    closeNoticePopUp(state) {
      state.onNoticePopUp = false;
    },
    closeSearchPopUp(state) {
      state.onSearchPopUp = false;
    },
    closeModal(state) {
      state.onLoginModal = false;
      state.onIconCropperModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
      state.onSearchPopUp = false;
    },
  },
  extraReducers: (builder) => builder,
});
