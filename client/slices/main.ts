import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@typings/db";
import {
  getGroupsWithScoreAction,
  groupVoteForStyleAction,
  groupVoteUndoAction,
} from "actions/group";

export interface MainState {
  voteGroups: IGroup | null;
  selectedGroup: IGroup | null;
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
  getGroupsWithScoreLoading: boolean;
  getGroupsWithScoreDone: boolean;
  getGroupsWithScoreError: boolean;
  groupVoteLoading: boolean;
  groupVoteDone: boolean;
  groupVoteError: boolean;
  groupVoteUndoLoading: boolean;
  groupVoteUndoDone: boolean;
  groupVoteUndoError: boolean;
}

const mainState: MainState = {
  voteGroups: null,
  selectedGroup: null,
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
  getGroupsWithScoreLoading: false,
  getGroupsWithScoreDone: false,
  getGroupsWithScoreError: false,
  groupVoteLoading: false,
  groupVoteDone: false,
  groupVoteError: false,
  groupVoteUndoLoading: false,
  groupVoteUndoDone: false,
  groupVoteUndoError: false,
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
    groupVoteUndoClear(state) {
      state.groupVoteUndoLoading = false;
      state.groupVoteUndoDone = false;
      state.groupVoteUndoError = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getGroupsWithScoreAction.pending, (state) => {
        state.getGroupsWithScoreLoading = true;
      })
      .addCase(getGroupsWithScoreAction.fulfilled, (state, action) => {
        state.getGroupsWithScoreLoading = false;
        state.getGroupsWithScoreDone = true;
        state.voteGroups = action.payload.data.data;
        if (!action.payload.isRefresh) {
          state.selectedGroup = action.payload.data.data[0];
        }
      })
      .addCase(getGroupsWithScoreAction.rejected, (state) => {
        state.getGroupsWithScoreLoading = false;
        state.getGroupsWithScoreError = true;
      })
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
      })
      .addCase(groupVoteUndoAction.pending, (state) => {
        state.groupVoteUndoLoading = true;
      })
      .addCase(groupVoteUndoAction.fulfilled, (state, action) => {
        state.groupVoteUndoLoading = false;
        state.groupVoteUndoDone = true;
        state.selectedGroup = action.payload.data;
      })
      .addCase(groupVoteUndoAction.rejected, (state) => {
        state.groupVoteUndoLoading = false;
        state.groupVoteUndoError = true;
      }),
});
