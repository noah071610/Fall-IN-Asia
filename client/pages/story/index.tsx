import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import XLGLayout from "@layout/XLGLayout";
import {
  BORDER_THIN,
  FLEX_STYLE,
  LG_SIZE,
  noRevalidate,
  NO_POST_URL,
  toastErrorMessage,
  XLG_SIZE,
} from "config";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { ICountry, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import CountryPreviewSlide from "@components/CountryPreviewSlide";
import StoryMainPoster from "@sections/StoryPage/StoryPoster";
import tw from "twin.macro";
import MainCountryAllview from "@components/CountryAllview";
import TopNavigation from "@components/TopNavigation";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import ArticleCard from "@components/Cards/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import Head from "next/head";
import Image from "next/image";
import { mainSlice } from "slices/main";
import { GetServerSidePropsContext } from "next";

const StoryMainWrapper = styled.div`
  padding-top: 4rem;
  .country-list-wrapper {
    ${tw`mx-auto py-4`}
    width:${XLG_SIZE};
  }
  .story-top-section {
    ${tw`pt-16`}
  }
  .more-story-btn {
    ${tw`py-1 px-3 ml-4 rounded-lg text-xs font-bold hover:shadow-md`}
    ${BORDER_THIN("border")};
  }
  .popular-story-wrapper {
    .article-card-wrapper {
      ${tw`grid mb-8`}
    }
    .article-card-column-wrapper {
      ${tw`hidden`}
    }
  }
  .no-story-wrapper {
    ${tw`rounded-xl select-none p-8 mt-8`}
    height:500px;
    ${FLEX_STYLE("center", "center", "column")};
    img {
      ${tw`w-40 h-40 opacity-30 mb-4`}
    }
    h2 {
      ${tw`text-base font-bold mb-4 text-center`}
    }
  }
  @media (max-width: ${LG_SIZE}) {
    .country-list-wrapper {
      ${tw`px-2 w-full`}
    }
  }
  @media (max-width: 460px) {
    .popular-story-wrapper {
      .article-card-wrapper {
        ${tw`hidden`}
      }
      .article-card-column-wrapper {
        ${tw`block`}
      }
    }
  }
`;

interface IProps {
  initiaStories: IStory[][];
  initialPopularStories: IStory[];
}

const StoryMainPage: FC<IProps> = ({ initiaStories, initialPopularStories }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const [filter, setFilter] = useState("");
  const [onAllCountries, setAllCountries] = useState(false);
  const [onMorePopularStory, setOnMorePopularStory] = useState(false);
  const { data: popularStories } = useSWR<IStory[]>("/story/popular", fetcher, {
    fallbackData: initialPopularStories,
    ...noRevalidate,
  });
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) =>
      `/story?page=${index + 1}&code=${query?.country || ""}&filter=${
        filter === "country" ? "" : filter
      }`,
    fetcher,
    {
      fallbackData: initiaStories,
      ...noRevalidate,
    }
  );

  const storyPageNav = useMemo(() => {
    const nav_list = [
      { name: "인기순", value: "popular" },
      { name: "최신순", value: "" },
      { name: "댓글많은순", value: "comment" },
      { name: "조회순", value: "view" },
    ];
    if (query?.country) {
      nav_list.push({ name: "국가전체보기", value: "all_country" });
    } else {
      nav_list.push({ name: "국가선택", value: "country" });
    }
    if (user) {
      nav_list.push({ name: "연대기올리기", value: "post" });
    }
    return nav_list;
  }, [query, user]);

  const { data: countries } = useSWR<ICountry[]>(`/country`, fetcher, noRevalidate);

  const { data: country } = useSWR<ICountry>(
    query?.country ? `/country/${query?.country}` : null,
    fetcher,
    noRevalidate
  );

  useEffect(() => {
    setAllCountries(false);
    setFilter("");
  }, [query]);

  const onClickList = useCallback((value: string) => {
    if (value === "all_country") {
      router.push("/story");
      return;
    }
    if (value === "post") {
      router.push("/story/post");
      return;
    }
    setFilter(value);
    if (value === "country") {
      setAllCountries((prev) => !prev);
      scrollTo({ top: 461 });
      return;
    }
    setAllCountries(false);
  }, []);

  const onClickMorePopularStoryBtn = useCallback(() => {
    setOnMorePopularStory(true);
  }, []);

  const onClickPostStoryBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      dispatch(mainSlice.actions.toggleLoginModal());
    } else {
      router.push("/story/post");
    }
  }, [dispatch, user]);

  return (
    <>
      <Head>
        <title>Fall IN Asia - story</title>
      </Head>
      <StoryMainWrapper>
        <StoryMainPoster name={country?.name} image={country?.image_src} />
        {!query?.country && (
          <div className="country-list-wrapper">
            <CountryPreviewSlide slidesPerView={6.2} isMain={false} />
          </div>
        )}
        <TopNavigation filter={filter} onClickList={onClickList} list={storyPageNav} />
        <XLGLayout>
          {onAllCountries && (
            <>
              <h2 className="main-title">국가선택</h2>
              <MainCountryAllview isMain={false} countries={countries} />
            </>
          )}
          <h2 style={{ display: "flex", alignItems: "center" }} className="main-title">
            인기연대기
            {popularStories && !onMorePopularStory && popularStories?.length > 1 && (
              <button className="more-story-btn" onClick={onClickMorePopularStoryBtn}>
                더보기
              </button>
            )}
          </h2>
          {popularStories && (
            <>
              <div className="popular-story-wrapper">
                <ArticleCard story={popularStories[0]} />
                <ArticleColumnCard story={popularStories[0]} />
                {onMorePopularStory &&
                  popularStories?.slice(1).map((v, i) => {
                    return <ArticleCard key={i} story={v} />;
                  })}
                {onMorePopularStory &&
                  popularStories?.slice(1).map((v, i) => {
                    return <ArticleColumnCard key={i} story={v} />;
                  })}
              </div>
            </>
          )}
          <h2 className="main-title">연대기</h2>
          {stories && stories?.flat().length > 0 ? (
            <StoryArticleList grid={4} gap="1.5rem" setSize={setSize} stories={stories} />
          ) : (
            <div className="no-story-wrapper">
              <Image layout="fill" src={NO_POST_URL} alt="no-post-img" />
              <h2>연대기가 없습니다. 첫 연대기에 주인공이 되어주세요!</h2>
              <button className="story-post-btn" onClick={onClickPostStoryBtn}>
                연대기 올리기
              </button>
            </div>
          )}
        </XLGLayout>
      </StoryMainWrapper>
    </>
  );
};

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
      let initialStories = await fetcher(`/story?page=1`);
      initialStories = [initialStories];
      let initialPopularStories = await fetcher(`/story/popular`);
      return {
        props: { initialStories, initialPopularStories },
      };
    }
);

export default StoryMainPage;
