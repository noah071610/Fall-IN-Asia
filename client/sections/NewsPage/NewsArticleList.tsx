/* eslint-disable no-unused-vars */
import NewsCard from "@components/Cards/NewsCard";
import styled from "@emotion/styled";
import useOnScreen from "@hooks/useOnScreen";
import { IArticle } from "@typings/db";
import React, { FC, useEffect, useRef, useState } from "react";
import tw from "twin.macro";

const NewsArticleListWrapper = styled.div`
  ${tw`relative`}
`;

interface IProps {
  articles: IArticle[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IArticle[][] | undefined>;
}

const NewsArticleList: FC<IProps> = ({ articles, setSize }) => {
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const isEmpty = articles?.[0]?.length === 0;

  useEffect(() => {
    if (articles) {
      setIsReachingEnd(articles[articles.length - 1]?.length < 10);
    }
  }, [articles]);
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize((prev) => prev + 1).then(() => {});
    }
  }, [isVisible]);

  const articlesData = articles ? articles?.flat() : [];
  return (
    <NewsArticleListWrapper>
      <span id="article_list" className="anchor-offset-controller" />
      {articlesData?.map((v: IArticle, i: number) => {
        return <NewsCard key={i} article={v} />;
      })}
      <div ref={ref} />
    </NewsArticleListWrapper>
  );
};

export default NewsArticleList;
