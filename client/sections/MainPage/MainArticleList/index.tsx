import ArticleCard from "@components/Cards/ArticleCard";
import { IMainPost } from "@typings/db";
import React, { FC, useState } from "react";
import { MainArticleListWrapper } from "./styles";

interface IProps {
  mainPosts: IMainPost[];
}

const MainArticleList: FC<IProps> = ({ mainPosts }) => {
  const [state, setstate] = useState();
  return (
    <MainArticleListWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button>인기순</button>
          <button>최신순</button>
          <button>댓글많은순</button>
        </div>
        {mainPosts?.map((v, i) => {
          return <ArticleCard key={i} mainPost={v} />;
        })}
      </div>
    </MainArticleListWrapper>
  );
};

export default MainArticleList;
