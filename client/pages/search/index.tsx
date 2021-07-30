import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import GuideCard from "@components/Cards/GuideCard";
import ListCard from "@components/Cards/ListCard";
import MomentCard from "@components/Cards/MomentCard";
import MomentSmallCard from "@components/Cards/MomentSmallCard";
import PosterCard from "@components/Cards/PosterCard";
import TopNavigation from "@components/TopNavigation";
import styled from "@emotion/styled";
import LGLayout from "@layout/LGLayout";
import SearchPageLayout from "@layout/SearchPageLayout";
import XLGLayout from "@layout/XLGLayout";
import SearchPagePoster from "@sections/SearchPagePoster";
import { IMoment, IStory } from "@typings/db";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { GRID_STYLE, noRevalidate, XLG_SIZE } from "config";
import { wrapper } from "configureStore";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import useSWR from "swr";
import tw from "twin.macro";
import fetcher from "utils/fetcher";

const SearchPageWrapper = styled.div`
  .layout {
    ${tw`bg-white`}
  }
  ${tw`bg-white`}

  .searched-story-wrapper {
    ${GRID_STYLE("1rem", "repeat(4,1fr)")}
  }

  .searched-moment-wrapper {
    ${GRID_STYLE("1rem", "repeat(4,1fr)")}
  }
`;

interface IProps {
  searchPosts: { searchWord: string; moments: IMoment[]; stories: IStory[] };
}

const index: FC<IProps> = ({ searchPosts }) => {
  const { query } = useRouter();
  const { data: searchPostsData } = useSWR<{
    searchWord: string;
    moments: IMoment[];
    stories: IStory[];
  }>(`/search/${encodeURIComponent(query?.keyword as string)}`, fetcher, {
    initialData: searchPosts,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <SearchPageWrapper>
      <SearchPagePoster searchWord={searchPostsData?.searchWord || ""} />
      <XLGLayout>
        <h3 className="main-title">연대기</h3>
        <div className="searched-story-wrapper">
          {searchPostsData?.stories?.length! > 0 ? (
            searchPostsData?.stories?.map((v, i) => <ArticleColumnCard key={i} story={v} />)
          ) : (
            <div>연대기가 없습니다.</div>
          )}
        </div>
        <h3 className="main-title">모멘트</h3>
        <div className="searched-moment-wrapper">
          {searchPostsData?.moments?.length! > 0 ? (
            searchPostsData?.moments?.map((v, i) => (
              <MomentSmallCard isSearchPage={true} moment={v} key={i} />
            ))
          ) : (
            <div>연대기가 없습니다.</div>
          )}
        </div>
        <h3 className="main-title">여행소식</h3>
        <div className="searched-news-wrapper">
          {searchPostsData?.stories?.map((v, i) => (
            <GuideCard key={i} />
          ))}
        </div>
      </XLGLayout>
    </SearchPageWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }

      await store.dispatch(getUserInfoAction());
      const searchPosts = await fetcher(`/search/${encodeURIComponent(query?.keyword as string)}`);

      return {
        props: { searchPosts },
      };
    }
);

export default index;
