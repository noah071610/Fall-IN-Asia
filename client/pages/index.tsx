import React, { useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MainArticleList from "@sections/MainPage/MainArticleList";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import CountryCardSilde from "@components/CountryCardSilde";
import MainTopContent from "@sections/MainPage/MainTopContent";
import { mainPostSlice } from "slices/mainPost";
import { useRouter } from "next/router";
import { IMainPost } from "@typings/db";
import CountryList from "@components/CountryList";

const index = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const {
    data: mainPosts,
    revalidate,
    setSize,
  } = useSWRInfinite<IMainPost[]>(
    (index) =>
      `/mainPost?code=${query?.code || ""}&page=${index + 1}&filter=${query?.filter || ""}&type=${
        query?.type || ""
      }`,
    fetcher,
    noRevalidate
  );

  const { mainPostCreateDone, mainPostLikeDone, mainPostDislikeDone } = useSelector(
    (state: RootState) => state.mainPost
  );
  useEffect(() => {
    if (mainPostCreateDone) {
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
      dispatch(mainPostSlice.actions.mainPostCreateClear());
      revalidate();
    }
  }, [mainPostCreateDone]);
  useEffect(() => {
    if (mainPostLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(mainPostSlice.actions.mainPostLikeClear());
      dispatch(getUserInfoAction());
      revalidate();
    }
  }, [mainPostLikeDone]);

  useEffect(() => {
    if (mainPostDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(mainPostSlice.actions.mainPostDislikeClear());
      dispatch(getUserInfoAction());
      revalidate();
    }
  }, [mainPostDislikeDone]);
  return (
    <MainLayout>
      <h2 className="main-title">인기여행지</h2>
      <CountryList slidesPerView={3.2} isMain={true} />
      <h2 className="main-title">전세계 인기글</h2>
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
