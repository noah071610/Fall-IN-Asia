import React, { useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { getGroupsWithScoreAction } from "actions/group";
import MainArticleList from "@sections/MainPage/MainArticleList";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import MainPost from "@sections/MainPage/MainPost";
import MainLayout from "@layout/MainLayout";
import MainTopContent from "@sections/MainPage/MainTopContent";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { mainPostSlice } from "slices/mainPost";
import { commentSlice } from "slices/comment";

const index = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { data: mainPosts } = useSWR("/mainPost?code=&page=0", fetcher);
  const {
    data: mainPost,
    error,
    revalidate,
  } = useSWR(`/mainPost/${query?.code}/${query?.mainPostId}`, fetcher);
  const { mainPostEditConfirmDone, mainPostDeleteDone, mainPostDislikeDone, mainPostLikeDone } =
    useSelector((state: RootState) => state.mainPost);
  const { commentCreateDone, commentDeleteDone, subCommentCreateDone, subCommentDeleteDone } =
    useSelector((state: RootState) => state.comment);

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
      revalidate();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("댓글을 성공적으로 삭제했습니다.");
      revalidate();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (subCommentCreateDone) {
      toastSuccessMessage("답글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.subCommentCreateClear());
      revalidate();
    }
  }, [subCommentCreateDone]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
      revalidate();
    }
  }, [subCommentDeleteDone]);

  useEffect(() => {
    if (mainPostLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(mainPostSlice.actions.mainPostLikeClear());
      revalidate();
    }
  }, [mainPostLikeDone]);

  useEffect(() => {
    if (mainPostDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(mainPostSlice.actions.mainPostDislikeClear());
      revalidate();
    }
  }, [mainPostDislikeDone]);
  return (
    <MainLayout>
      <div className="layout_main">
        <h2 className="main-title">15번째 메아리</h2>
        <MainPost mainPost={mainPost} />
        <h2 className="main-title">인기급상승</h2>
        <MainTopContent />
        <h2 className="main-title">포스팅</h2>
        <MainPostingForm />
        <MainArticleList mainPosts={mainPosts} />
      </div>
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
      await store.dispatch(getGroupsWithScoreAction(1));
      return {
        props: {},
      };
    }
);

export default index;
