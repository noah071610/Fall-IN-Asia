import XLGLayout from "@layout/XLGLayout";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import React, { FC, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import PosterCard from "@components/Cards/PosterCard";
import ArticleCard from "@components/Cards/ArticleCard";
import StoryCard from "@components/Cards/StoryCard";
import { useSWRInfinite } from "swr";
import { IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import { GRID_STYLE, noRevalidate } from "config";
import GuideCard from "@components/Cards/GuideCard";
import styled from "@emotion/styled";
SwiperCore.use([Pagination]);

const GuidePageWrapper = styled.div`
  .layout-divide {
    ${GRID_STYLE("1rem", "2fr 1fr")};
  }
`;

interface IProps {}

const index: FC<IProps> = () => {
  const {
    data: stories,
    revalidate,
    setSize,
  } = useSWRInfinite<IStory[]>((index) => `/story?page=${index + 1}`, fetcher, noRevalidate);
  const [state, setstate] = useState();
  return (
    <GuidePageWrapper>
      <Swiper slidesPerView={1} pagination={true}>
        <SwiperSlide>
          <PosterCard />
        </SwiperSlide>
        <SwiperSlide>
          <PosterCard />
        </SwiperSlide>
        <SwiperSlide>
          <PosterCard />
        </SwiperSlide>
      </Swiper>
      <XLGLayout>
        <h2 className="main-title">가이드</h2>
        <div className="layout-divide">
          <div>
            <GuideCard />
            <GuideCard />
            <GuideCard />
          </div>
        </div>
      </XLGLayout>
    </GuidePageWrapper>
  );
};

export default index;

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
