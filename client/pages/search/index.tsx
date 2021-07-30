import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import GuideCard from "@components/Cards/GuideCard";
import ListCard from "@components/Cards/ListCard";
import MomentCard from "@components/Cards/MomentCard";
import MomentSmallCard from "@components/Cards/MomentSmallCard";
import TopNavigation from "@components/TopNavigation";
import styled from "@emotion/styled";
import LGLayout from "@layout/LGLayout";
import SearchPageLayout from "@layout/SearchPageLayout";
import XLGLayout from "@layout/XLGLayout";
import { IMoment, IStory } from "@typings/db";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { noRevalidate } from "config";
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
`;

interface IProps {
  searchPosts: { moments: IMoment[]; stories: IStory[] };
}

const index: FC<IProps> = ({ searchPosts }) => {
  const { query } = useRouter();
  const { data: searchPostsData } = useSWR<{ moments: IMoment[]; stories: IStory[] }>(
    `/search/${encodeURIComponent(query?.keyword as string)}`,
    fetcher,
    { initialData: searchPosts, revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  console.log(searchPostsData);

  return (
    <SearchPageWrapper>
      <TopNavigation />
      <XLGLayout>
        <h3 className="main-title">포스트</h3>
        <div style={{ display: "flex" }}>
          {searchPostsData?.moments?.map((v, i) => (
            <ArticleColumnCard story={v} key={i} />
          ))}
        </div>
        <h3 className="main-title">연대기</h3>
        <div>
          {searchPostsData?.stories?.map((v, i) => (
            <ArticleColumnCard key={i} story={v} />
          ))}
        </div>
        <h3 className="main-title">가이드</h3>
        <div>
          {searchPostsData?.stories?.map((v, i) => (
            <GuideCard />
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
      console.log("####", searchPosts);

      return {
        props: { searchPosts },
      };
    }
);

export default index;
