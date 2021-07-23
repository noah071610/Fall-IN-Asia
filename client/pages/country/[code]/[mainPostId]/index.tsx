import React, { useEffect, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MainArticleList from "@sections/MainPage/MainArticleList";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import MainPost from "@sections/MainPage/MainPost";
import MainLayout from "@layout/MainLayout";
import MainTopContent from "@sections/MainPage/MainTopContent";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { mainPostSlice } from "slices/mainPost";
import { commentSlice } from "slices/comment";
import { IMainPost } from "@typings/db";

const index = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const { data: mainPost, revalidate: revalidateMainPost } = useSWR(
    `/mainPost/${query?.code}/${query?.mainPostId}`,
    fetcher
  );
  const {
    data: mainPosts,
    size,
    revalidate: revalidateMainPosts,
    setSize,
  } = useSWRInfinite<IMainPost[]>(
    (index) =>
      filter
        ? `/mainPost/${filter}`
        : `/mainPost?code=${query?.code || ""}&page=${index + 1}&type=${query?.type || ""}`,
    fetcher
  );

  const {
    mainPostCreateDone,
    mainPostEditConfirmDone,
    mainPostDeleteDone,
    mainPostDislikeDone,
    mainPostLikeDone,
  } = useSelector((state: RootState) => state.mainPost);
  const { commentCreateDone, commentDeleteDone, subCommentCreateDone, subCommentDeleteDone } =
    useSelector((state: RootState) => state.comment);

  useEffect(() => {
    if (mainPostCreateDone) {
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
      dispatch(mainPostSlice.actions.mainPostCreateClear());
      revalidateMainPosts();
    }
  }, [mainPostCreateDone]);

  useEffect(() => {
    if (mainPostEditConfirmDone) {
      router.push(`/club/${query?.group}/edit`);
    }
  }, [mainPostEditConfirmDone]);

  useEffect(() => {
    if (mainPostDeleteDone) {
      toastSuccessMessage("게시글을 삭제했습니다.");
      dispatch(mainPostSlice.actions.mainPostDeleteClear());
    }
  }, [mainPostDeleteDone]);

  useEffect(() => {
    if (commentCreateDone) {
      toastSuccessMessage("댓글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.commentCreateClear());
      revalidateMainPost();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("댓글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.commentDeleteClear());
      revalidateMainPost();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (subCommentCreateDone) {
      toastSuccessMessage("답글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.subCommentCreateClear());
      revalidateMainPost();
    }
  }, [subCommentCreateDone]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.subCommentDeleteClear());
      revalidateMainPost();
    }
  }, [subCommentDeleteDone]);

  useEffect(() => {
    if (mainPostLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(mainPostSlice.actions.mainPostLikeClear());
      dispatch(getUserInfoAction());
      revalidateMainPosts();
      revalidateMainPost();
    }
  }, [mainPostLikeDone]);

  useEffect(() => {
    if (mainPostDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(mainPostSlice.actions.mainPostDislikeClear());
      dispatch(getUserInfoAction());
      revalidateMainPosts();
      revalidateMainPost();
    }
  }, [mainPostDislikeDone]);
  return (
    <MainLayout>
      <h2 className="main-title">15번째 메아리</h2>
      <MainPost mainPost={mainPost} />
      <h2 className="main-title">인기급상승</h2>
      <MainTopContent />
      <h2 className="main-title">포스팅</h2>
      <MainPostingForm />
      <MainArticleList setSize={setSize} mainPosts={mainPosts} />
    </MainLayout>
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

export default index;
