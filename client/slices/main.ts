import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchWordAction } from "actions/main";

export interface MainState {
  searchWord: string;
  onProfilePopUp: boolean;
  onNoticePopUp: boolean;
  onSearchPopUp: boolean;
  onLoginModal: boolean;
  onIconCropperModal: boolean;
  onWithdrawalModal: boolean;
  searchWordLoading: boolean;
  searchWordDone: boolean;
  searchWordError: boolean;
  onSlideMenu: boolean;
}

const mainState: MainState = {
  searchWord: "",
  onProfilePopUp: false,
  onNoticePopUp: false,
  onSearchPopUp: false,
  onLoginModal: false,
  onWithdrawalModal: false,
  onIconCropperModal: false,
  searchWordLoading: false,
  searchWordDone: false,
  searchWordError: false,
  onSlideMenu: false,
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
      state.onSlideMenu = false;
    },
    toggleIconCropperModal(state) {
      state.onIconCropperModal = !state.onIconCropperModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },
    toggleWithdrawalModal(state) {
      state.onWithdrawalModal = !state.onWithdrawalModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
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
    toggleSlideMenu(state) {
      state.onSlideMenu = !state.onSlideMenu;
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
    openSearchPopUp(state) {
      state.onSearchPopUp = true;
    },
    closeNoticePopUp(state) {
      state.onNoticePopUp = false;
    },
    closeSearchPopUp(state) {
      state.onSearchPopUp = false;
    },
    closeSlideMenu(state) {
      state.onSlideMenu = false;
    },
    closeModal(state) {
      state.onLoginModal = false;
      state.onIconCropperModal = false;
      state.onWithdrawalModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },
    clearSearchWord(state) {
      state.searchWordLoading = false;
      state.searchWordDone = false;
      state.searchWordError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(searchWordAction.pending, (state) => {
        state.searchWordLoading = true;
      })
      .addCase(searchWordAction.fulfilled, (state, action) => {
        state.searchWordLoading = false;
        state.searchWordDone = true;
        state.searchWord = action.payload.data?.searchWord;
      })
      .addCase(searchWordAction.rejected, (state) => {
        state.searchWordLoading = false;
        state.searchWordError = true;
      }),
});
