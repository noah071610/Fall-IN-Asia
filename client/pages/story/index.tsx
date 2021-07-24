import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import LG_Layout from "@layout/LG_Layout";
import {
  BORDER_THIN,
  FLEX_STYLE,
  FONT_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  HOVER_GRAY,
  noRevalidate,
  RGB_BLACK,
  toastSuccessMessage,
  WHITE_COLOR,
  WHITE_STYLE,
} from "config";
import StoryCard from "@components/Cards/StoryCard";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { SwiperSlide, Swiper } from "swiper/react";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import router, { useRouter } from "next/router";
import { storySlice } from "slices/story";
import { useSWRInfinite } from "swr";
import { IMainPost, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import StoryCountryArticleList from "@sections/StoryPage/StoryCountryArticleList";
import MainTopContent from "@sections/MainPage/MainTopContent";
import BoxCard from "@components/Cards/BoxCard";
import { useRef } from "react";
const Wrapper = styled.div`
  .story-slider {
    position: relative;
    width: 100%;
    height: 350px;
    background: url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg)
      no-repeat top left / 100% 100%;

    ${FLEX_STYLE("center", "center")};
    .title {
      cursor: pointer;
      z-index: 1;
      ${FONT_STYLE(2, true, WHITE_COLOR)};
    }
  }
  .story-post-btn {
    ${FLEX_STYLE("flex-end", "center")};
    margin-bottom: 1rem;
    button {
      padding: 0.55rem;
      ${BORDER_THIN("border")};
      ${WHITE_STYLE(false, "130px", 10)};
      &:hover {
        box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)};
      }
    }
  }
  .story-popular-wrapper {
    ${GRID_STYLE("2rem", "1fr 1fr ")};
    margin-top: 2rem;
    .box-card {
      padding: 0;
      background: ${GRAY_COLOR};
      .image-wrapper {
        margin: 0 0 1rem 0;
      }
      .box-card-info {
        padding: 0;
      }
      h2 {
        padding: 1rem 0;
      }
    }
  }
  .user-slide {
    img {
      border-radius: 50%;
    }
  }
  .swiper-slide {
    width: 180px;
  }
  .story-list-wrapper {
    .small-list {
      display: flex;
      margin-bottom: 1rem;
      img {
        width: 7rem;
        height: 4rem;
        padding-right: 1rem;
      }
    }
  }
`;
interface IProps {}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
};

const index: FC<IProps> = () => {
  const { query } = useRouter();
  const scrollbarRef = useRef(null);
  const {
    data: stories,
    revalidate,
    setSize,
  } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}&filter=${query?.filter || ""}`,
    fetcher,
    noRevalidate
  );
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { storyCreateDone } = useSelector((state: RootState) => state.story);

  useEffect(() => {
    if (storyCreateDone) {
      toastSuccessMessage("당신에 멋진 연대기가 올라갔어요🥰");
      dispatch(storySlice.actions.storyCreateClear());
    }
  }, [storyCreateDone]);

  return (
    <Wrapper>
      <div className="story-slider">
        <div className="overlay" />
        <h1 className="title">울고 웃었던 당신의 소중한 연대기를 저희도 따라가볼래요.</h1>
      </div>
      <LG_Layout>
        <div className="story-post-btn">
          <button onClick={() => router.push("/story/post")}>연대기 올리기</button>
        </div>
        <h2 className="main-title">국가별 연대기</h2>
        <StoryCountryArticleList />
        <h2 className="main-title">인기 급상승 연대기</h2>
        <StoryCard story={stories && stories[0][0]} />
        <div className="story-popular-wrapper">
          <BoxCard />
          <BoxCard />
        </div>
        <h2 className="main-title">연대기 전체</h2>
        <StoryArticleList setSize={setSize} stories={stories} />
      </LG_Layout>
    </Wrapper>
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
