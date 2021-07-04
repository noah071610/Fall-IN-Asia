import React, { FC, useEffect, useState } from "react";
import ClubLayout from "@sections/ClubLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import styled from "@emotion/styled";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection";
import PostingEditor from "@components/PostingEditor";
import { clubSlice } from "slices/club";
import { toastSuccessMessage } from "config";

const ClubPostingWrapper = styled.div`
  padding: 2rem;
`;

interface IProps {}

const post: FC<IProps> = () => {
  const { query } = useRouter();
  const { data: clubData, error, revalidate, mutate } = useSWR(`/club/${query?.group}`, fetcher);

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { clubPostCreateDone } = useSelector((state: RootState) => state.club);

  useEffect(() => {
    if (clubPostCreateDone) {
      dispatch(clubSlice.actions.clubPostCreateClear());
      toastSuccessMessage("ポストの作成が終わりました😍");
      router.push(`/club/${query?.group}`);
    }
  }, [clubPostCreateDone]);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);
  return (
    <ClubPostingWrapper>
      <ClubTitleSection clubName={clubData?.name} />
      <PostingEditor />
    </ClubPostingWrapper>
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

export default post;
