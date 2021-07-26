import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import XLGLayout from "@layout/XLGLayout";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, GRID_STYLE, noRevalidate, WHITE_STYLE } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import router, { useRouter } from "next/router";
import { useSWRInfinite } from "swr";
import { IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import CountryList from "@components/CountryList";
import StoryMainPoster from "@sections/StoryPage/StoryMainPoster";
import tw from "twin.macro";
import StoryTopArticleList from "@sections/StoryPage/StoryTopArticleList";
const Wrapper = styled.div`
  .story-post-btn {
    ${FLEX_STYLE("flex-end", "center")};
    margin-bottom: 1rem;
    button {
      padding: 0.55rem;
      ${BORDER_THIN("border")};
      ${WHITE_STYLE(false, "130px", 10)};
      &:hover {
        ${tw`shadow-md`}
      }
    }
  }
  .story-popular-wrapper {
    ${GRID_STYLE("2rem", "1fr 1fr 1fr")};
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

const index: FC<IProps> = () => {
  const { query } = useRouter();
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
  return (
    <Wrapper>
      <StoryMainPoster />
      <XLGLayout>
        <div className="story-post-btn">
          <button onClick={() => router.push("/story/post")}>연대기 올리기</button>
        </div>
        <h2 className="main-title">국가별 연대기</h2>
        <CountryList slidesPerView={3.2} isMain={false} />
        <h2 className="main-title">인기 급상승 연대기</h2>
        <StoryTopArticleList />
        <h2 className="main-title">연대기 전체</h2>
        <StoryArticleList setSize={setSize} stories={stories} />
      </XLGLayout>
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
