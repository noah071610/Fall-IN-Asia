import React, { useEffect, useRef, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { RootState } from "slices";
import { getGroupsWithScoreAction } from "actions/group";
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
  const [filterType, setFilterType] = useState("");
  const { query } = useRouter();
  const {
    data: mainPosts,
    size,
    revalidate,
    setSize,
  } = useSWRInfinite<IMainPost[]>(
    (index) =>
      filterType
        ? `/mainPost/${filterType}`
        : `/mainPost?code=${query?.code || ""}&page=${index + 1}`,
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
  const { mainPostCreateDone } = useSelector((state: RootState) => state.mainPost);
  useEffect(() => {
    if (mainPostCreateDone) {
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
      dispatch(mainPostSlice.actions.mainPostCreateClear());
      revalidate();
    }
  }, [mainPostCreateDone]);
  return (
    <MainLayout>
      <h2 className="main-title">{country?.name + "에서 인기폭발 🥰"}</h2>
      <div />
      <h2 className="main-title">{country?.name + " 인기일대기"}</h2>
      <MainTopContent />
      <h2 className="main-title">포스팅</h2>
      <MainPostingForm />
      <MainArticleList setSize={setSize} setFilterType={setFilterType} mainPosts={mainPosts} />
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
