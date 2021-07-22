import ArticleCard from "@components/Cards/ArticleCard";
import { IMainPost } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { MainArticleListWrapper } from "./styles";
import useOnScreen from "@hooks/useOnScreen";

interface IProps {
  mainPosts: IMainPost[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMainPost[][] | undefined>;
  setFilter: (value: string) => void;
}

const MainArticleList: FC<IProps> = ({ mainPosts, setSize, setFilter }) => {
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const isEmpty = mainPosts?.[0]?.length === 0;

  useEffect(() => {
    if (mainPosts) {
      setIsReachingEnd(mainPosts[mainPosts.length - 1]?.length < 10);
    }
  }, [mainPosts]);
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize((prev) => prev + 1).then(() => {});
    }
  }, [isVisible]);

  const flatMainPosts = mainPosts ? mainPosts?.flat() : [];

  const onClickPopular = useCallback(() => {
    setFilter("popular");
  }, []);
  const onClickNew = useCallback(() => {
    setFilter("new");
  }, []);
  const onClickTopComment = useCallback(() => {
    setFilter("topComment");
  }, []);
  return (
    <MainArticleListWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button onClick={onClickPopular}>인기순</button>
          <button onClick={onClickNew}>최신순</button>
          <button onClick={onClickTopComment}>댓글많은순</button>
        </div>
        {flatMainPosts?.map((v, i) => {
          return <ArticleCard key={i} mainPost={v} />;
        })}
        <div ref={ref} />
      </div>
    </MainArticleListWrapper>
  );
};

export default memo(MainArticleList);
