import React, { useEffect, useRef, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MainArticleList from "@sections/MainPage/MainArticleList";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import MainTopContent from "@sections/MainPage/MainTopContent";
import { mainPostSlice } from "slices/mainPost";
import router, { useRouter } from "next/router";
import { ICountry, IMainPost } from "@typings/db";

const index = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const {
    data: mainPosts,
    size,
    revalidate,
    setSize,
  } = useSWRInfinite<IMainPost[]>(
    (index) =>
      `/mainPost?code=${query?.code || ""}&page=${index + 1}&filter=${query?.filter || ""}&type=${
        query?.type || ""
      }`,
    fetcher
  );
  const { data: country, error } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher,
    noRevalidate
  );
  if (error) {
    router.push("/");
  }
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
      <h2 className="main-title">{country?.name + "에서 인기폭발 🥰"}</h2>
      <div />
      <h2 className="main-title">{country?.name + " 인기일대기"}</h2>
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
