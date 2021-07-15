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
import { BLUE_COLOR, BORDER_THIN, RGB_BLACK, toastErrorMessage, toastSuccessMessage } from "config";
import { clubSlice } from "slices/club";
import { commentSlice } from "slices/comment";
import { IComment } from "@typings/db";

const CommentsWrapper = styled.div`
  margin: 0 2rem 4rem 2rem;
`;

const CommentTitle = styled.div`
  padding: 1rem 2rem 1rem 2.5rem;
  background: ${RGB_BLACK(0.03)};
  ${BORDER_THIN("border")};
  margin-bottom: 1rem;
  .count-comment {
    font-size: 1.3rem;
    color: ${BLUE_COLOR};
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

interface IProps {}

const ClubPost: FC<IProps> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const {
    data: postData,
    error,
    revalidate,
  } = useSWR(`/club/${query?.group}/${query?.id}`, fetcher);
  const { clubPostEditConfirmDone, clubPostDeleteDone, clubPostDislikeDone, clubPostLikeDone } =
    useSelector((state: RootState) => state.club);
  const { commentCreateDone, commentDeleteDone } = useSelector((state: RootState) => state.comment);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }

  useEffect(() => {
    if (clubPostEditConfirmDone) {
      router.push(`/club/${query?.group}/edit`);
    }
  }, [clubPostEditConfirmDone]);

  useEffect(() => {
    if (clubPostDeleteDone) {
      router.push(`/club/${query?.group}`);
      toastSuccessMessage("ポストを成功的に削除致しました。");
      dispatch(clubSlice.actions.clubPostDeleteClear());
    }
  }, [clubPostDeleteDone]);

  useEffect(() => {
    if (commentCreateDone) {
      toastSuccessMessage("コメントを成功的に作成致しました。");
      dispatch(commentSlice.actions.commentCreateClear());
      revalidate();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("コメントを成功的に削除致しました。");
      dispatch(commentSlice.actions.commentDeleteClear());
      revalidate();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (clubPostLikeDone) {
      toastSuccessMessage("いいね！💓");
      dispatch(clubSlice.actions.clubPostLikeClear());
      revalidate();
    }
  }, [clubPostLikeDone]);

  useEffect(() => {
    if (clubPostDislikeDone) {
      toastSuccessMessage("いいね取り消し💔");
      dispatch(clubSlice.actions.clubPostDislikeClear());
      revalidate();
    }
  }, [clubPostDislikeDone]);

  return (
    <ClubLayout>
      <ClubPostTitle postData={postData} />
      <ClubPostContent postData={postData} />
      <CommentTitle>
        <span className="count-comment">{postData?.comments?.length}</span>件のコメント
      </CommentTitle>
      <CommentForm />
      <CommentsWrapper>
        {postData?.comments?.map((v: IComment, i: number) => {
          return <Comment key={i} commentData={v} />;
        })}
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
