import ArticleCard from "@components/Cards/ArticleCard";
import { IMainPost, IStory } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { StoryArticleListWrapper } from "./styles";
import router, { useRouter } from "next/router";
import StoryCard from "@components/Cards/StoryCard";
import useOnScreen from "@hooks/useOnScreen";

interface IProps {
  stories: IStory[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IStory[][] | undefined>;
}

const StoryArticleList: FC<IProps> = ({ stories, setSize }) => {
  const { query } = useRouter();
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

  const onClickPopular = useCallback(() => {
    router.push(`/story?filter=popular`);
  }, [query]);
  const onClickNewest = useCallback(() => {
    router.push(`/story`);
  }, [query]);
  const onClickTopComment = useCallback(() => {
    router.push(`/story?filter=comment`);
  }, [query]);

  const storiesData = stories ? stories?.flat() : [];

  return (
    <StoryArticleListWrapper>
      <div className="content-filter">
        <button onClick={onClickPopular}>인기순</button>
        <button onClick={onClickNewest}>최신순</button>
        <button onClick={onClickTopComment}>댓글많은순</button>
      </div>
      {storiesData?.map((v: IStory, i) => {
        return <StoryCard key={i} story={v} />;
      })}
      <div ref={ref} />
    </StoryArticleListWrapper>
  );
};

export default memo(StoryArticleList);
