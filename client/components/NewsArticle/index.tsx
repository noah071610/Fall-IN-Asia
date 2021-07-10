import NewsSmallArticleCard from "@components/Cards/NewsSmallArticleCard";
import React, { FC, useState } from "react";
import { NewsArticleWrapper } from "./styles";

import { Scrollbars } from "react-custom-scrollbars";
interface IProps {}

const NewsArticle: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <NewsArticleWrapper>
      <div className="hot-topic-article">
        <div>
          <img src="https://dimg.donga.com/ugc/CDB/KOREAN/Article/60/aa/d6/55/60aad655011dd2738245.jpg" />
        </div>
        <h3>🚀 HOT TOPIK</h3>
        <h2>BTS, グローバルの舞台でButterのパフォーマンスの見せて輝いた</h2>
      </div>
      <div className="sub-topic-article">
        <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200} universal={true}>
          <NewsSmallArticleCard />
          <NewsSmallArticleCard />
          <NewsSmallArticleCard />
          <NewsSmallArticleCard />
          <NewsSmallArticleCard />
        </Scrollbars>
      </div>
    </NewsArticleWrapper>
  );
};

export default NewsArticle;
