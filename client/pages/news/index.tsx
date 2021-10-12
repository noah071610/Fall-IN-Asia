import React, { FC, useCallback, useState } from "react";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import PosterCard from "@components/Cards/PosterCard";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { IArticle } from "@typings/db";
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
  WORLD_IMAGE,
} from "config";
import styled from "@emotion/styled";
import tw from "twin.macro";
import ArticleImageCard from "@components/Cards/ArticleImageCard";
import TopNavigation from "@components/TopNavigation";
import ArticleSmallCard from "@components/Cards/ArticleSmallCard";
import NewsArticleList from "@sections/NewsPage/NewsArticleList";
import Head from "next/head";
import { NextArrow, PrevArrow } from "@components/SliderArrow";
import Slider from "react-slick";
import { GetServerSidePropsContext } from "next";

const NewsPageWrapper = styled.div`
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
  .slick-active {
    z-index: 999;
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

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const NewsMainPage: FC<IProps> = ({ initialArticles, initialAsideArticle }) => {
  const [type, setType] = useState("관광뉴스");
  const { data: articles, setSize } = useSWRInfinite<IArticle[]>(
    (index) => `/article?page=${index + 1}&type=${type ? encodeURIComponent(type) : ""}`,
    fetcher,
    {
      fallbackData: initialArticles,
      ...noRevalidate,
    }
  );

  const { data: asideArticle } = useSWR<IArticle[]>(`/article/popular`, fetcher, {
    fallbackData: initialAsideArticle,
    ...noRevalidate,
  });

  const onClickList = useCallback((value: string) => {
    setType(value);
  }, []);
  return (
    <>
      <Head>
        <title>News | Fall IN Asia</title>
        <meta
          name="description"
          content={`아시아 여행관련 뉴스, 관광소식 Creators With : FAll IN Asia , 지금 아시아속으로 들어가봐요! | 여행 관광 투어 아시아여행 일본 대만 태국 베트남`}
        />
        <meta property="og:title" content="Fall IN Asia" />
        <meta
          property="og:description"
          content={`아시아 여행관련 뉴스, 관광소식 Creators With : FAll IN Asia , 지금 아시아속으로 들어가봐요! | 여행 관광 투어 아시아여행 일본 대만 태국 베트남`}
        />
        <meta property="og:image" content={WORLD_IMAGE} />
        <meta property="og:url" content={`https://fallinasia.com/news`} />
      </Head>
      <NewsPageWrapper>
        <Slider {...settings}>
          <PosterCard
            image="/images/poster/moment_poster.jpg"
            path="/"
            title="Share your infomation"
            desc="모멘트 : 여행이라는 망망대해에서 길을 잃었나요? 물어봐요! 돈드는거 아니잖아요~"
          />
          <PosterCard
            image="/images/poster/story_poster.jpg"
            path="/story"
            title="Leave and Share your memory"
            desc="연대기 : 당신의 여정에는 어떤 일이 있었나요?"
          />
          <PosterCard
            image="/images/poster/covid_poster.jpg"
            link="https://www.0404.go.kr/dev/newest_list.mofa"
            title="I trust We can get over covid-19"
            desc="해외안전여행 : 외교부에서 코로나19 입국제한 여부를 확인하세요."
          />
        </Slider>
        <TopNavigation onClickList={onClickList} filter={type} list={newsPageNavList} />
        <main className="news-layout">
          <h2 className="main-title">{type}</h2>
          <div className="layout-divide">
            {articles && articles?.flat().length > 0 ? (
              <NewsArticleList setSize={setSize} articles={articles} />
            ) : (
              <div className="no-article-wrapper">
                <img src={NO_POST_URL} alt="no-news-img" />
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
        </main>
      </NewsPageWrapper>
    </>
  );
};

export default NewsMainPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      let initialArticles = await fetcher(`/article?page=1`);
      initialArticles = [initialArticles];
      const initialAsideArticle = await fetcher(`/article/popular`);
      return {
        props: { initialArticles, initialAsideArticle },
      };
    }
);
