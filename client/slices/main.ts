import { createSlice } from "@reduxjs/toolkit";
import { deleteNoticeAction, searchWordAction } from "actions/main";

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
  deleteNoticeLoading: boolean;
  deleteNoticeDone: boolean;
  deleteNoticeError: boolean;
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
  deleteNoticeLoading: false,
  deleteNoticeDone: false,
  deleteNoticeError: false,
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
    toggleWithdrawalModal(state) {
      state.onWithdrawalModal = !state.onWithdrawalModal;
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
    openSearchPopUp(state) {
      state.onSearchPopUp = true;
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
      state.onWithdrawalModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
      state.onSearchPopUp = false;
    },
    clearSearchWord(state) {
      state.searchWordLoading = false;
      state.searchWordDone = false;
      state.searchWordError = false;
    },
    deleteNoticeClear(state) {
      state.deleteNoticeLoading = false;
      state.deleteNoticeDone = false;
      state.deleteNoticeError = false;
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
        state.searchWord = action.payload.data.searchWord;
      })
      .addCase(searchWordAction.rejected, (state) => {
        state.searchWordLoading = false;
        state.searchWordError = true;
      })
      .addCase(deleteNoticeAction.pending, (state) => {
        state.deleteNoticeLoading = true;
      })
      .addCase(deleteNoticeAction.fulfilled, (state) => {
        state.deleteNoticeLoading = false;
        state.deleteNoticeDone = true;
      })
      .addCase(deleteNoticeAction.rejected, (state) => {
        state.deleteNoticeLoading = false;
        state.deleteNoticeError = true;
      }),
});
