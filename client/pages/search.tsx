import React, { FC } from "react";
import styled from "@emotion/styled";
import XLGLayout from "@layout/XLGLayout";
import SearchPagePoster from "@sections/SearchPage/SearchPagePoster";
import SearchPostList from "@sections/SearchPage/SearchPostList";
import { IMoment, IStory } from "@typings/db";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import { useRouter } from "next/router";
import useSWR from "swr";
import tw from "twin.macro";
import fetcher from "utils/fetcher";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";

const SearchPageWrapper = styled.div`
  ${tw`bg-white pb-60 pt-16`}
  .layout {
    ${tw`bg-white`}
  }
`;

interface IProps {
  searchPosts: { searchWord: string; moments: IMoment[]; stories: IStory[] };
}

const SearchPage: FC<IProps> = ({ searchPosts }) => {
  const { query } = useRouter();
  const { data: searchPostsData } = useSWR<{
    searchWord: string;
    moments: IMoment[];
    stories: IStory[];
  }>(`/search/${encodeURIComponent(query?.keyword as string)}`, fetcher, {
    fallbackData: searchPosts,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      <Head>
        <title>Search - {searchPostsData?.searchWord}</title>
      </Head>
      <SearchPageWrapper>
        <SearchPagePoster searchWord={searchPostsData?.searchWord || ""} />
        <XLGLayout>
          <h3 className="main-title">연대기</h3>
          {searchPostsData && searchPostsData?.stories?.length > 0 ? (
            <SearchPostList stories={searchPostsData?.stories} />
          ) : (
            <div>연대기가 없습니다.</div>
          )}
          <h3 className="main-title">모멘트</h3>
          {searchPostsData && searchPostsData?.moments?.length > 0 ? (
            <SearchPostList moments={searchPostsData?.moments} />
          ) : (
            <div>모멘트가 없습니다.</div>
          )}
          <h3 className="main-title">여행소식</h3>
        </XLGLayout>
      </SearchPageWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      const searchPosts = await fetcher(`/search/${encodeURIComponent(query?.keyword as string)}`);
      return {
        props: { searchPosts },
      };
    }
);

export default SearchPage;
