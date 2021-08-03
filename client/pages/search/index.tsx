import React, { FC, useCallback, useState } from "react";
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

const SearchPageWrapper = styled.div`
  ${tw`bg-white pb-60 pt-16`}
  .layout {
    ${tw`bg-white`}
  }
`;

interface IProps {
  searchPosts: { searchWord: string; moments: IMoment[]; stories: IStory[] };
}

const index: FC<IProps> = ({ searchPosts }) => {
  const { query } = useRouter();
  const [onMoreMoments, setOnMoreMoments] = useState(false);
  const [onMoreNews, setOnMoreNews] = useState(false);
  const { data: searchPostsData } = useSWR<{
    searchWord: string;
    moments: IMoment[];
    stories: IStory[];
  }>(`/search/${encodeURIComponent(query?.keyword as string)}`, fetcher, {
    initialData: searchPosts,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const onClickMoreMoments = useCallback(() => {
    setOnMoreMoments((prev) => !prev);
  }, []);
  const onClickMoreNews = useCallback(() => {
    setOnMoreNews((prev) => !prev);
  }, []);

  return (
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
