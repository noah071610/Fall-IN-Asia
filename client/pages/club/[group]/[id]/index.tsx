import React, { FC, useEffect, useState } from "react";
import ClubLayout from "@sections/ClubLayout";
import ClubPostTitle from "@sections/ClubPostPage/ClubPostTitle";
import ClubPostContent from "@sections/ClubPostPage/ClubPostContent";
import CommentForm from "@components/CommentForm/";
import Comment from "@components/Comment";
import styled from "@emotion/styled";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastSuccessMessage } from "config";
import { clubSlice } from "slices/club";

const CommentsWrapper = styled.div`
  margin: 0 2rem 4rem 2rem;
`;

interface IProps {}

const ClubPost: FC<IProps> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data: postData, error } = useSWR(`/club/post/${query?.group}/${query?.id}`, fetcher);
  const { clubPostEditDone, clubPostDeleteDone } = useSelector((state: RootState) => state.club);
  useEffect(() => {
    if (clubPostEditDone) {
      toastSuccessMessage("ポストを成功的に書き直りました。");
      dispatch(clubSlice.actions.clubPostEditClear);
      router.push(`/club/${query?.group}`);
    }
  }, [clubPostEditDone]);
  useEffect(() => {
    if (clubPostDeleteDone) {
      toastSuccessMessage("ポストを成功的に削除致しました。");
      dispatch(clubSlice.actions.clubPostDeleteClear);
      router.push(`/club/${query?.group}/edit`);
    }
  }, [clubPostDeleteDone]);
  return (
    <ClubLayout>
      <ClubPostTitle postData={postData} />
      <ClubPostContent postData={postData} />
      <CommentForm />
      <CommentsWrapper>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentsWrapper>
    </ClubLayout>
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

export default ClubPost;
