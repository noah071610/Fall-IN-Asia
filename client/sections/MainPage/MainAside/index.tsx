import MomentSmallCard from "@components/Cards/MomentSmallCard";
import React, { FC, useState } from "react";
import { MainAsideWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { toastErrorMessage, toastSuccessMessage } from "config";
import ArticleImageCard from "@components/Cards/ArticleImageCard";
import { IMainPost, IStory } from "@typings/db";
import useHtmlConverter from "@hooks/useHtmlConverter";

interface IProps {}

const MainAside: FC<IProps> = () => {
  const { data: latestMainPosts } = useSWR<IMainPost[]>("/mainPost/latest", fetcher);
  const { data: latestStories } = useSWR<IStory[]>("/story/latest", fetcher);
  return (
    <MainAsideWrapper>
      <h2 className="aside-title">최근 연대기</h2>
      {latestStories?.map((v, i) => (
        <MomentSmallCard story={v} key={i} />
      ))}
      <h2 className="aside-title">최근 모멘트</h2>
      {latestMainPosts?.map((v, i) => (
        <MomentSmallCard mainPost={v} key={i} />
      ))}
    </MainAsideWrapper>
  );
};

export default MainAside;
