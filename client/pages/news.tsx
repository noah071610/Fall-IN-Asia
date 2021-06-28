import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import { FLEX_STYLE } from "config";
import NewsSection from "@sections/MainPage/NewsSection";
import NewsArticle from "@components/NewsArticle";
const { Search } = Input;
export const Wrapper = styled.div`
  padding: 2rem;
  .news-title {
    width: 100%;
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
      <div className="news-title">
        <h2>
          <span className="point">K-POP</span> ニュース
        </h2>
        <Search />
      </div>
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
