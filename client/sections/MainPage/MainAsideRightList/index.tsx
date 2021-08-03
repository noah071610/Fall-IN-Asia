import ArticleSmallCard from "@components/Cards/ArticleSmallCard";
import React, { FC, useState } from "react";
import { MainAsideRightListWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IMoment, IStory } from "@typings/db";

interface IProps {}

const MainAsideRightList: FC<IProps> = () => {
  const { data: latestMoments } = useSWR<IMoment[]>("/moment/latest", fetcher);
  const { data: latestStories } = useSWR<IStory[]>("/story/latest", fetcher);
  return (
    <MainAsideRightListWrapper>
      <h2 className="aside-title">최근 연대기</h2>
      {latestStories?.map((v, i) => (
        <ArticleSmallCard story={v} key={i} />
      ))}
      <h2 className="aside-title">최근 모멘트</h2>
      {latestMoments?.map((v, i) => (
        <ArticleSmallCard moment={v} key={i} />
      ))}
    </MainAsideRightListWrapper>
  );
};

export default MainAsideRightList;
