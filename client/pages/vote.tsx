import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import GroupVote from "@components/GroupVote";
import VoteSearchForm from "@sections/VotePage/VoteSearchForm";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";

const VoteWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const vote: FC<IProps> = () => {
  const { data: groupsData, error, revalidate } = useSWR("/group/score", fetcher);
  const dispatch = useDispatch();
  const { groupVoteDone, selectedGroup } = useSelector((state: RootState) => state.main);
  useEffect(() => {
    if (groupVoteDone) {
      toastSuccessMessage("投票ありがとうございます🥰");
      revalidate();
      dispatch(mainSlice.actions.groupVoteClear());
    }
  }, [groupVoteDone]);
  useEffect(() => {
    if (groupsData && !selectedGroup) {
      dispatch(mainSlice.actions.selectGroupForVote(groupsData[0]));
    }
  }, [groupsData]);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。");
  }
  return (
    <VoteWrapper>
      <CommonTitle title="人気投票" subtitle="貴方が好きなグループはどんなスタイル？" />
      <VoteSearchForm groupsData={groupsData} />
      <GroupVote groupsData={groupsData} isOnVotePage={true} />
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
      return {
        props: {},
      };
    }
);

export default vote;
