import ArticleCard from "@components/Cards/ArticleCard";
import { IMainPost } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { MainArticleListWrapper } from "./styles";
import useOnScreen from "@hooks/useOnScreen";
import router, { useRouter } from "next/router";

interface IProps {
  mainPosts: IMainPost[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMainPost[][] | undefined>;
}

const MainArticleList: FC<IProps> = ({ mainPosts, setSize }) => {
  const { query } = useRouter();
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

  const mainPostsData = mainPosts ? mainPosts?.flat() : [];

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
    <MainArticleListWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button onClick={onClickPopular}>인기순</button>
          <button onClick={onClickNewest}>최신순</button>
          <button onClick={onClickTopComment}>댓글많은순</button>
        </div>
        {mainPostsData?.map((v, i) => {
          return <ArticleCard key={i} mainPost={v} />;
        })}
        <div ref={ref} />
      </div>
    </MainArticleListWrapper>
  );
};

export default memo(MainArticleList);
