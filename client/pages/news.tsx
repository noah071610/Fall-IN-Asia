import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import { FLEX_STYLE } from "config";
import NewsArticle from "@components/NewsArticle";
import CommonTitle from "@components/Common/CommonTitle";
import CommonSearch from "@components/Common/CommonSearch";
import NewsArticleCard from "@components/Cards/NewsArticleCard";
const { Search } = Input;
export const Wrapper = styled.div`
  padding: 2rem;
  .news-article {
    margin-top: 2rem;
    &-cards {
      margin-top: 2rem;
    }
  }
`;

interface IProps {}

const news: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <CommonTitle point="KPOP" title="ニュース" />
      <CommonSearch />
      <div className="news-article">
        <NewsArticle />
      </div>
      <div className="news-article-cards">
        <NewsArticleCard />
        <NewsArticleCard />
        <NewsArticleCard />
      </div>
    </Wrapper>
  );
};

export default news;
