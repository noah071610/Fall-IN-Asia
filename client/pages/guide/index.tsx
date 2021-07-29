import XLGLayout from "@layout/XLGLayout";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import React, { FC, useMemo, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper/core";
import PosterCard from "@components/Cards/PosterCard";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useSWRInfinite } from "swr";
import { IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import { GRID_STYLE, noRevalidate } from "config";
import GuideCard from "@components/Cards/GuideCard";
import styled from "@emotion/styled";
import tw from "twin.macro";
import MainAside from "@sections/MainPage/MainAside";
import ImageCard from "@components/Cards/ImageCard";
import ArticleImageCard from "@components/Cards/ArticleImageCard";
import TopNavigation from "@components/TopNavigation";
SwiperCore.use([EffectFade, Pagination, Autoplay]);

const GuidePageWrapper = styled.div`
  .layout-divide {
    ${GRID_STYLE("2rem", "2fr 1fr")};
  }
  .swiper-pagination-bullet {
    ${tw`rounded-none w-auto h-auto inline-block py-2 px-4 bg-white opacity-70 hover:opacity-100 mx-1 font-bold`}
    transition:0.3s all;
  }
`;

interface IProps {}

const bulletTextByIndex = ["아름다운동행", "태국음식체험전", "러브캠핑"];

const index: FC<IProps> = () => {
  const {
    data: stories,
    revalidate,
    setSize,
  } = useSWRInfinite<IStory[]>((index) => `/story?page=${index + 1}`, fetcher, noRevalidate);
  const [state, setstate] = useState();
  const pagination = useMemo(() => {
    return {
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<button class="swiper-pagination-bullet">${bulletTextByIndex[index]}</button>`;
      },
    };
  }, []);
  return (
    <GuidePageWrapper>
      <Swiper
        autoplay={{
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          delay: 5000,
        }}
        loop={true}
        effect={"fade"}
        slidesPerView={1}
        className="mySwiper"
        pagination={pagination}
      >
        <SwiperSlide>
          <PosterCard image="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <PosterCard image="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <PosterCard image="https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </SwiperSlide>
      </Swiper>
      <TopNavigation />
      <XLGLayout>
        <h2 className="main-title">가이드</h2>
        <div className="layout-divide">
          <div>
            <GuideCard />
            <GuideCard />
            <GuideCard />
          </div>
          <div>
            <ArticleImageCard />
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
