import MomentSmallCard from "@components/Cards/MomentSmallCard";
import React, { FC, useState } from "react";
import { MainAsideWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IMoment, IStory } from "@typings/db";

interface IProps {}

const MainAside: FC<IProps> = () => {
  const { data: latestMoments } = useSWR<IMoment[]>("/moment/latest", fetcher);
  const { data: latestStories } = useSWR<IStory[]>("/story/latest", fetcher);
  return (
    <MainAsideWrapper>
      <h2 className="aside-title">최근 연대기</h2>
      {latestStories?.map((v, i) => (
        <MomentSmallCard story={v} key={i} />
      ))}
      <h2 className="aside-title">최근 모멘트</h2>
      {latestMoments?.map((v, i) => (
        <MomentSmallCard moment={v} key={i} />
      ))}
    </MainAsideWrapper>
  );
};

export default MainAside;
