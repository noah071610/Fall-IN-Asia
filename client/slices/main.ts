import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "@typings/db";
import { groupVoteForStyleAction } from "actions/group";

export interface MainState {
  onCommunityModal: boolean;
  onLoginModal: boolean;
  onSignupModal: boolean;
  onUserInfoModal: boolean;
  groupVoteLoading: boolean;
  groupVoteDone: boolean;
  groupVoteError: boolean;
  selectedGroup: IGroup | null;
}

const mainState: MainState = {
  onCommunityModal: false,
  onLoginModal: false,
  onSignupModal: false,
  onUserInfoModal: false,
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
      .addCase(groupVoteForStyleAction.fulfilled, (state) => {
        state.groupVoteLoading = false;
        state.groupVoteDone = true;
      })
      .addCase(groupVoteForStyleAction.rejected, (state) => {
        state.groupVoteLoading = false;
        state.groupVoteError = true;
      }),
});
