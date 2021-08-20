import { IStory } from "@typings/db";
import React, { FC, memo, useEffect, useState } from "react";
import { useRef } from "react";
import useOnScreen from "@hooks/useOnScreen";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import { GRID_STYLE } from "config";
import tw from "twin.macro";
import { css } from "@emotion/react";
const StoryArticleListWrapper = (grid: number, gap: string) => css`
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  @media (max-width: 460px) {
    display: block;
  }
  ${tw`relative`}
  transition:0.3s all;
  ${GRID_STYLE(gap, `repeat(${grid},1fr)`)};
`;
interface IProps {
  stories: IStory[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IStory[][] | undefined>;
  grid: number;
  gap: string;
}

const StoryArticleList: FC<IProps> = ({ stories, grid, gap, setSize }) => {
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const isEmpty = stories?.[0]?.length === 0;

  useEffect(() => {
    if (stories) {
      setIsReachingEnd(stories[stories.length - 1]?.length < 10);
    }
  }, [stories]);
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize((prev) => prev + 1).then(() => {});
    }
  }, [isVisible]);

  const storiesData = stories ? stories?.flat() : [];

  return (
    <>
      <div css={StoryArticleListWrapper(grid, gap)}>
        <span id="article_list" className="anchor-offset-controller" />
        {storiesData?.map((v: IStory, i) => {
          return <ArticleColumnCard key={i} story={v} />;
        })}
      </div>
      <div ref={ref} />
    </>
  );
};

export default memo(StoryArticleList);
