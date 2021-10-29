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
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
  const { t } = useTranslation("common");
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
          <h3 className="main-title">{t("main.story")}</h3>
          {searchPostsData && searchPostsData?.stories?.length > 0 ? (
            <SearchPostList stories={searchPostsData?.stories} />
          ) : (
            <div>{t("main.noStory")}</div>
          )}
          <h3 className="main-title">{t("main.moment")}</h3>
          {searchPostsData && searchPostsData?.moments?.length > 0 ? (
            <SearchPostList moments={searchPostsData?.moments} />
          ) : (
            <div>{t("main.noMoment")}</div>
          )}
        </XLGLayout>
      </SearchPageWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query, locale }: GetServerSidePropsContext) => {
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
        props: { searchPosts, ...(await serverSideTranslations(locale as string, ["common"])) },
      };
    }
);

export default SearchPage;
