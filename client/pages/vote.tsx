import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import GroupVote from "@components/GroupVote";
import VoteSearchForm from "@sections/VotePage/VoteSearchForm";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import { getGroupsWithScoreAction } from "actions/group";

const VoteWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const vote: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { groupVoteDone, groupVoteUndoDone, selectedGroup } = useSelector(
    (state: RootState) => state.main
  );
  useEffect(() => {
    if (groupVoteDone) {
      toastSuccessMessage("投票ありがとうございます🥰");
      dispatch(getGroupsWithScoreAction(selectedGroup?.id));
      dispatch(mainSlice.actions.groupVoteClear());
    }
  }, [groupVoteDone, selectedGroup]);

  useEffect(() => {
    if (groupVoteUndoDone) {
      toastSuccessMessage("投票を取り消しました。");
      dispatch(getGroupsWithScoreAction(selectedGroup?.id));
      dispatch(mainSlice.actions.groupVoteUndoClear());
    }
  }, [groupVoteUndoDone, selectedGroup]);

  return (
    <VoteWrapper>
      <CommonTitle title="人気投票" subtitle="貴方が好きなグループはどんなスタイル？" />
      <VoteSearchForm />
      <GroupVote isOnVotePage={true} />
    </VoteWrapper>
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
      await store.dispatch(getGroupsWithScoreAction(1));
      return {
        props: {},
      };
    }
);

export default vote;
