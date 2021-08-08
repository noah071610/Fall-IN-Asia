import { IArticle } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import React, { FC, useCallback, useState } from "react";
import { NewsCardWrapper } from "./styles";
import router from "next/router";
import html2textConverter from "utils/html2textConverter";

interface IProps {
  article: IArticle;
}

const NewsCard: FC<IProps> = ({ article }) => {
  const onClickNewsCard = useCallback(() => {
    router.push(`/news/${article?.id}`);
  }, [article]);
  return (
    <NewsCardWrapper className="news-card-wrapper" onClick={onClickNewsCard}>
      <div className="image-wrapper">
        <img src={article?.thumbnail ? article.thumbnail : NO_IMAGE_URL} alt="thai" />
        {article?.label && (
          <div className="guide-label">
            <span>{article?.label}</span>
          </div>
        )}
      </div>
      <div className="news-main">
        <h2>{article?.title}</h2>
        <p className="news-content">{html2textConverter(article?.content)}</p>
      </div>
    </NewsCardWrapper>
  );
};

export default NewsCard;
