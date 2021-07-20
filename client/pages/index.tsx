import React, { useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { RootState } from "slices";
import { getGroupsWithScoreAction } from "actions/group";
import MainArticleList from "@sections/MainPage/MainArticleList";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import CountryCardSilde from "@components/CountryCardSilde";

const index = () => {
  const { data: mainPosts, error, revalidate } = useSWR("/mainPost?code=&page=0", fetcher);
  return (
    <MainLayout>
      <div className="layout_main">
        <h2 className="main-title">인기여행지</h2>
        <CountryCardSilde />
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
