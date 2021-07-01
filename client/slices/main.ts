import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  nickname?: string;
  email: string;
  password: string;
}

const initialState = {
  onCommunityModal: false,
  onLoginModal: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    closeModal(state) {
      state.onCommunityModal = false;
      state.onLoginModal = false;
    },
    toggleCommunityModal(state) {
      state.onCommunityModal = !state.onCommunityModal;
      state.onLoginModal = false;
    },
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onCommunityModal = false;
    },
  },
  extraReducers: (builder) => {},
});

export default mainSlice;
