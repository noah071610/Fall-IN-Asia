import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import XLGLayout from "@layout/XLGLayout";
import {
  BORDER_THIN,
  FLEX_STYLE,
  noRevalidate,
  NO_POST_URL,
  RGB_BLACK,
  WHITE_STYLE,
  XLG_SIZE,
} from "config";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import router, { useRouter } from "next/router";
import useSWR, { useSWRInfinite } from "swr";
import { ICountry, IStory } from "@typings/db";
import fetcher from "utils/fetcher";
import CountryList from "@components/CountryList";
import StoryMainPoster from "@sections/StoryPage/StoryMainPoster";
import tw from "twin.macro";
import MainCountryAllview from "@sections/MainPage/MainCountryAllview";
import TopNavigation from "@components/TopNavigation";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import ArticleCard from "@components/Cards/ArticleCard";
const Wrapper = styled.div`
  padding-top: 4rem;
  .country-list-wrapper {
    ${tw`mx-auto py-4`}
    width:${XLG_SIZE};
  }
  .story-top-section {
    ${tw`pt-8`}
  }
  .story-post-btn-wrapper {
    ${FLEX_STYLE("flex-end", "center")};
  }
  .more-icon {
    font-size: 2rem;
    color: ${RGB_BLACK(0.15)};
  }
  .story-post-btn {
    padding: 0.55rem;
    ${BORDER_THIN("border")};
    ${WHITE_STYLE(false, "130px", 10)};
    &:hover {
      ${tw`shadow-md`}
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
      ${tw`text-base font-bold mb-4`}
    }
  }
`;
interface IProps {}

const index: FC<IProps> = () => {
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const [onAllCountries, setAllCountries] = useState(false);
  const { data: popularStories } = useSWR<IStory[]>("/story/popular", fetcher);
  const { data: stories, setSize } = useSWRInfinite<IStory[]>(
    (index) =>
      `/story?page=${index + 1}&code=${query?.country || ""}&filter=${
        filter === "country" ? "" : filter
      }`,
    fetcher,
    noRevalidate
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
    return nav_list;
  }, [query]);

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
    setFilter(value);
    if (value === "country") {
      setAllCountries((prev) => !prev);
      return;
    }
    setAllCountries(false);
  }, []);

  return (
    <Wrapper>
      <StoryMainPoster name={country?.name} image={country?.image_src} />
      {!query?.country && (
        <div className="country-list-wrapper">
          <CountryList slidesPerView={6.2} isMain={false} />
        </div>
      )}
      <TopNavigation filter={filter} onClickList={onClickList} list={storyPageNav} />
      <XLGLayout>
        <div className="story-post-btn-wrapper">
          <button className="story-post-btn" onClick={() => router.push("/story/post")}>
            연대기 올리기
          </button>
        </div>
        <div className="story-top-section">
          {onAllCountries ? (
            <MainCountryAllview isMain={false} countries={countries} />
          ) : (
            popularStories && <ArticleCard story={popularStories[0]} />
          )}{" "}
        </div>
        {stories && stories?.flat().length > 0 ? (
          <StoryArticleList grid={4} gap="1.5rem" setSize={setSize} stories={stories} />
        ) : (
          <div className="no-story-wrapper">
            <img src={NO_POST_URL} alt="no-post-img" />
            <h2>연대기가 없습니다. 첫 연대기에 주인공이 되어주세요!</h2>
            <button className="story-post-btn" onClick={() => router.push("/story/post")}>
              연대기 올리기
            </button>
          </div>
        )}
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
