import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@typings/db";
import { groupVoteForStyleAction } from "actions/group";

export interface MainState {
  currentPage: number;
  onCommunityModal: boolean;
  onLoginModal: boolean;
  onSignupModal: boolean;
  onAnnounceMenu: boolean;
  onChatMenu: boolean;
  onFanMenu: boolean;
  onStudyMenu: boolean;
  onSettingMenu: boolean;
  onUserInfoModal: boolean;
  groupVoteLoading: boolean;
  groupVoteDone: boolean;
  groupVoteError: boolean;
  selectedGroup: IGroup | null;
}

const mainState: MainState = {
  currentPage: 1,
  onCommunityModal: false,
  onLoginModal: false,
  onSignupModal: false,
  onUserInfoModal: false,
  onAnnounceMenu: true,
  onChatMenu: false,
  onFanMenu: false,
  onStudyMenu: false,
  onSettingMenu: false,
  selectedGroup: null,
  groupVoteLoading: false,
  groupVoteDone: false,
  groupVoteError: false,
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
    showAnnounceMenu(state) {
      state.onAnnounceMenu = true;
      state.onChatMenu = false;
      state.onFanMenu = false;
      state.onStudyMenu = false;
      state.onSettingMenu = false;
    },
    showChatMenu(state) {
      state.onAnnounceMenu = false;
      state.onChatMenu = true;
      state.onFanMenu = false;
      state.onStudyMenu = false;
      state.onSettingMenu = false;
    },
    showFanMenu(state) {
      state.onAnnounceMenu = false;
      state.onChatMenu = false;
      state.onFanMenu = true;
      state.onStudyMenu = false;
      state.onSettingMenu = false;
    },
    showStudyMenu(state) {
      state.onAnnounceMenu = false;
      state.onChatMenu = false;
      state.onFanMenu = false;
      state.onStudyMenu = true;
      state.onSettingMenu = false;
    },
    showSettingMenu(state) {
      state.onAnnounceMenu = false;
      state.onChatMenu = false;
      state.onFanMenu = false;
      state.onStudyMenu = false;
      state.onSettingMenu = true;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    selectGroupForVote(state, action) {
      state.selectedGroup = action.payload;
    },
    groupVoteClear(state) {
      state.groupVoteLoading = false;
      state.groupVoteDone = false;
      state.groupVoteError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(groupVoteForStyleAction.pending, (state) => {
        state.groupVoteLoading = true;
      })
      .addCase(groupVoteForStyleAction.fulfilled, (state, action) => {
        state.groupVoteLoading = false;
        state.groupVoteDone = true;
        state.selectedGroup = action.payload.data;
      })
      .addCase(groupVoteForStyleAction.rejected, (state) => {
        state.groupVoteLoading = false;
        state.groupVoteError = true;
      }),
});
