import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import { FLEX_STYLE } from "config";
import NewsSection from "@sections/MainPage/NewsSection";
import NewsArticle from "@components/NewsArticle";
import CommonTitle from "@components/Common/CommonTitle";
import CommonSearch from "@components/Common/CommonSearch";
const { Search } = Input;
export const Wrapper = styled.div`
  padding: 2rem;
  .news-title {
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
    ${FLEX_STYLE("space-between", "center")};
    h2 {
      width: 50%;
    }
    .ant-input-search {
      width: 50%;
    }
  }
  .news-articles {
    padding: 1rem;
  }
`;

interface IProps {}

const news: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <CommonTitle point="KPOP" title="ニュース" />
      <CommonSearch />
      <div style={{ marginTop: "2rem" }} />
      <NewsSection />
      <div className="news-articles">
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    </Wrapper>
  );
};

export default news;
