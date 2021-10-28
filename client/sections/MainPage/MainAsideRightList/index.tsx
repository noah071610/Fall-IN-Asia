import ArticleSmallCard from "@components/Cards/ArticleSmallCard";
import React, { FC } from "react";
import { MainAsideRightListWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IMoment, IStory } from "@typings/db";
import { noRevalidate } from "config";
import { useTranslation } from "react-i18next";

interface IProps {}

const MainAsideRightList: FC<IProps> = () => {
  const { t } = useTranslation("common");
  const { data: latestMoments } = useSWR<IMoment[]>("/moment/latest", fetcher, noRevalidate);
  const { data: latestStories } = useSWR<IStory[]>("/story/latest", fetcher, noRevalidate);
  return (
    <MainAsideRightListWrapper>
      <div className="main-aside-right-wrapper">
        <h2 className="aside-title">{t("main.latestStory")}</h2>
        {latestStories?.map((v, i) => (
          <ArticleSmallCard story={v} key={i} />
        ))}
        <h2 className="aside-title">{t("main.latestMoment")}</h2>
        {latestMoments?.map((v, i) => (
          <ArticleSmallCard moment={v} key={i} />
        ))}
      </div>
    </MainAsideRightListWrapper>
  );
};

export default MainAsideRightList;
