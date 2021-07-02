import React from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import GoodsExchangeSection from "@sections/MainPage/GoodsExchangeSection";
import VoteSection from "@sections/MainPage/VoteSection";
import MusicChartSection from "@sections/MainPage/MusicChartSection";
import NewsSection from "@sections/MainPage/NewsSection";
import SupportSection from "@sections/MainPage/SupportSection";
import styled from "@emotion/styled";

const MainWrapper = styled.div`
  padding: 2rem 0;
`;

const index = () => {
  return (
    <MainWrapper>
      <GoodsExchangeSection />
      <NewsSection />
      <MusicChartSection />
      <SupportSection />
      <VoteSection />
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
