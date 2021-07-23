import ArticleCard from "@components/Cards/ArticleCard";
import { IMainPost } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { StoryArticleListWrapper } from "./styles";
import router, { useRouter } from "next/router";
import StoryCard from "@components/Cards/StoryCard";

interface IProps {
  storyPosts: IMainPost[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMainPost[][] | undefined>;
}

const StoryArticleList: FC<IProps> = ({ storyPosts, setSize }) => {
  const { query } = useRouter();
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isEmpty = storyPosts?.[0]?.length === 0;

  const onClickPopular = useCallback(() => {
    if (query.code) {
      router.push(
        `/country/${query.code}/${query.type ? "?type=" + query.type + "&" : "?"}filter=popular`
      );
    } else {
      router.push(`/${query.type ? "?type=" + query.type + "&" : "?"}filter=popular`);
    }
  }, [query]);
  const onClickNewest = useCallback(() => {
    if (query.code) {
      router.push(`/country/${query.code}${query.type ? "?type=" + query.type : ""}`);
    } else {
      router.push(`/${query.type ? "?type=" + query.type : ""}`);
    }
  }, [query]);
  const onClickTopComment = useCallback(() => {
    if (query.code) {
      router.push(
        `/country/${query.code}/${query.type ? "?type=" + query.type + "&" : "?"}filter=comment`
      );
    } else {
      router.push(`/${query.type ? "?type=" + query.type + "&" : "?"}filter=comment`);
    }
  }, [query]);
  return (
    <StoryArticleListWrapper>
      <div className="content-filter">
        <button onClick={onClickPopular}>국가검색</button>
        <button onClick={onClickNewest}>인기순</button>
        <button onClick={onClickNewest}>최신순</button>
        <button onClick={onClickTopComment}>댓글많은순</button>
      </div>
      <StoryCard />
    </StoryArticleListWrapper>
  );
};

export default memo(StoryArticleList);
