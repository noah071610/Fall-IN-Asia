import ArticleCard from "@components/Cards/ArticleCard";
import React, { FC, useState } from "react";
import { MainContentWrapper } from "./styles";

interface IProps {}

const MainContent: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainContentWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button>인기순</button>
          <button>최신순</button>
          <button>댓글많은순</button>
        </div>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </MainContentWrapper>
  );
};

export default MainContent;
