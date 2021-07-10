import React from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import GoodsExchangeSection from "@sections/MainPage/GoodsExchangeSection";
import MusicChartSection from "@sections/MainPage/MusicChartSection";
import SupportSection from "@sections/MainPage/SupportSection";
import styled from "@emotion/styled";
import GroupVote from "@components/GroupVote";
import NewsArticle from "@components/NewsArticle";

const MainWrapper = styled.div`
  padding: 2rem;
`;

const index = () => {
  return (
    <MainWrapper>
      <GoodsExchangeSection />
      <NewsArticle />
      <MusicChartSection />
      <SupportSection />
      <GroupVote />
    </MainWrapper>
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
