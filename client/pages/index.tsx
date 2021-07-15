import React, { useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import GoodsExchangeSection from "@sections/MainPage/GoodsExchangeSection";
import MusicChartSection from "@sections/MainPage/MusicChartSection";
import SupportSection from "@sections/MainPage/SupportSection";
import styled from "@emotion/styled";
import GroupVote from "@components/GroupVote";
import NewsArticle from "@components/NewsArticle";
import { toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { RootState } from "slices";
import { getGroupsWithScoreAction } from "actions/group";

const MainWrapper = styled.div`
  padding: 2rem;
`;

const index = () => {
  const dispatch = useDispatch();
  const { groupVoteDone, groupVoteUndoDone } = useSelector((state: RootState) => state.main);
  useEffect(() => {
    if (groupVoteDone) {
      toastSuccessMessage("投票ありがとうございます🥰");
      dispatch(getGroupsWithScoreAction(true));
      dispatch(mainSlice.actions.groupVoteClear());
    }
  }, [groupVoteDone]);

  useEffect(() => {
    if (groupVoteUndoDone) {
      toastSuccessMessage("投票を取り消しました。");
      dispatch(getGroupsWithScoreAction(true));
      dispatch(mainSlice.actions.groupVoteUndoClear());
    }
  }, [groupVoteUndoDone]);
  return (
    <MainWrapper>
      <GoodsExchangeSection />
      <NewsArticle />
      <MusicChartSection />
      <SupportSection />
      <GroupVote />
    </MainWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      await store.dispatch(getGroupsWithScoreAction(false));
      return {
        props: {},
      };
    }
);

export default index;
