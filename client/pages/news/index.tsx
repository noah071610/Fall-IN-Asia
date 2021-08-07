import XLGLayout from "@layout/XLGLayout";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import React, { FC, useCallback, useMemo, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper/core";
import PosterCard from "@components/Cards/PosterCard";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import useSWR, { useSWRInfinite } from "swr";
import { IArticle, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import {
  FLEX_STYLE,
  GRID_STYLE,
  LG_SIZE,
  MD_SIZE,
  newsPageNavList,
  noRevalidate,
  NO_POST_URL,
  SM_SIZE,
} from "config";
import styled from "@emotion/styled";
import tw from "twin.macro";
import ArticleImageCard from "@components/Cards/ArticleImageCard";
import TopNavigation from "@components/TopNavigation";
import ArticleSmallCard from "@components/Cards/ArticleSmallCard";
import NewsArticleList from "@sections/NewsPage/NewsArticleList";
SwiperCore.use([EffectFade, Pagination, Autoplay]);

const GuidePageWrapper = styled.div`
  padding-top: 4rem;
  .news-layout {
    width: ${LG_SIZE};
    ${tw`mx-auto py-8`}
    .main-title {
      ${tw`text-base font-bold mt-8 mb-4`}
    }
    .main-title:first-of-type {
      ${tw`mt-0 mb-4`}
    }
    .layout-divide {
      ${GRID_STYLE("2rem", "3fr 1fr")};
    }
  }
  .swiper-pagination-bullet {
    ${tw`rounded-none w-auto h-auto inline-block py-2 px-4 bg-white opacity-70 hover:opacity-100 mx-1 font-bold`}
    transition:0.3s all;
  }
  .news-aside {
    .aside-title {
      ${tw`text-base font-bold mb-4`}
    }
  }
  .no-article-wrapper {
    ${tw`rounded-xl select-none p-8 mt-8`}
    height:500px;
    ${FLEX_STYLE("center", "center", "column")};
    img {
      ${tw`w-40 h-40 opacity-30 mb-4`}
    }
    h2 {
      ${tw`text-base font-bold mb-4`}
    }
  }
  .swiper-pagination {
    ${tw`block`}
  }
  @media (max-width: ${MD_SIZE}) {
    .news-layout {
      ${tw`w-full px-2`};
      .layout-divide {
        ${tw`block w-full`}
      }
    }
    .news-aside {
      ${tw`hidden`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .swiper-pagination {
      ${tw`hidden`}
    }
    .no-article-wrapper {
      ${tw`p-0 mt-6`}
      height:300px;
      img {
        ${tw`mb-3`}
      }
    }
  }
`;

interface IProps {
  initialArticles: IArticle[][];
  initialAsideArticle: IArticle[];
}

const bulletTextByIndex = ["아름다운동행", "태국음식체험전", "러브캠핑"];

const index: FC<IProps> = ({ initialArticles, initialAsideArticle }) => {
  const [type, setType] = useState("관광뉴스");
  const {
    data: articles,
    revalidate: revalidateArticles,
    setSize,
  } = useSWRInfinite<IArticle[]>(
    (index) => `/article?page=${index + 1}&type=${type ? encodeURIComponent(type) : ""}`,
    fetcher,
    {
      initialData: initialArticles,
      ...noRevalidate,
    }
  );

  const { data: asideArticle } = useSWR<IArticle[]>(`/article/popular`, fetcher, {
    initialData: initialAsideArticle,
    ...noRevalidate,
  });

  const pagination = useMemo(() => {
    return {
      clickable: true,
      renderBullet: (index: number) => {
        return `<button class="swiper-pagination-bullet">${bulletTextByIndex[index]}</button>`;
      },
    };
  }, []);

  const onClickList = useCallback((value: string) => {
    setType(value);
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
      <TopNavigation onClickList={onClickList} filter={type} list={newsPageNavList} />
      <div className="news-layout">
        <h2 className="main-title">{type}</h2>
        <div className="layout-divide">
          {articles && articles?.flat().length > 0 ? (
            <NewsArticleList setSize={setSize} articles={articles} />
          ) : (
            <div className="no-article-wrapper">
              <img src={NO_POST_URL} alt="no-post-img" />
              <h2>아직 {type} 소식이 없어요.😥</h2>
            </div>
          )}
          {asideArticle && (
            <aside className="news-aside">
              {asideArticle?.length > 0 && (
                <>
                  <h2 className="aside-title">인기 소식</h2>
                  <ArticleImageCard article={asideArticle[0]} />
                  {asideArticle?.slice(1).map((v, i) => {
                    return <ArticleSmallCard key={i} article={v} />;
                  })}
                </>
              )}
            </aside>
          )}
        </div>
      </div>
    </GuidePageWrapper>
  );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await store.dispatch(getUserInfoAction());
  let initialArticles = await fetcher(`/article?page=1`);
  initialArticles = [initialArticles];
  const initialAsideArticle = await fetcher(`/article/popular`);
  return {
    props: { initialArticles, initialAsideArticle },
  };
});
