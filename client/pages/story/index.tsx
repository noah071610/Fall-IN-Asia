import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import LG_Layout from "@layout/LG_Layout";
import {
  BORDER_THIN,
  FLEX_STYLE,
  FONT_STYLE,
  HOVER_GRAY,
  RGB_BLACK,
  WHITE_COLOR,
  WHITE_STYLE,
} from "config";
import MainTopContent from "@sections/MainPage/MainTopContent";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import StoryCard from "@components/Cards/StoryCard";
import CountryCard from "@components/Cards/SmallCard";
import SmallCard from "@components/Cards/SmallCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { SwiperSlide, Swiper } from "swiper/react";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
const Wrapper = styled.div`
  .story-slider {
    position: relative;
    width: 100%;
    height: 350px;
    background: url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg)
      no-repeat top left / 100% 100%;
    .overlay {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${RGB_BLACK(0.4)};
    }
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
      padding: 0.7rem;
      ${BORDER_THIN("border")};
      ${WHITE_STYLE(false, "130px", 10)};
    }
  }
  .user-slide {
    img {
      border-radius: 50%;
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
  const [state, setstate] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Wrapper>
      <div className="story-slider">
        <div className="overlay" />
        <h1 className="title">울고 웃었던 당신의 소중한 연대기를 저희도 따라가볼래요.</h1>
      </div>
      <LG_Layout>
        <div className="story-post-btn">
          <button>연대기 올리기</button>
        </div>
        <h2 className="main-title">인기 급상승 연대기</h2>
        <StoryCard />
        <h2 className="main-title">인기 백패커스</h2>
        <Swiper className="user-slide" slidesPerView={4.8} freeMode={true}>
          <SwiperSlide>
            <SmallCard user={user} />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard user={user} />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard user={user} />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard user={user} />
          </SwiperSlide>
          <SwiperSlide>
            <SmallCard user={user} />
          </SwiperSlide>
        </Swiper>
        <h2 className="main-title">연대기 전체</h2>
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
