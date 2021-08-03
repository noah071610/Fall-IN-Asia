import { IArticle, IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import router from "next/router";
import React, { FC, useCallback, useState } from "react";
import { ArticleImageCardWrapper } from "./styles";

interface IProps {
  article: IArticle;
}

const ArticleImageCard: FC<IProps> = ({ article }) => {
  const onClickArticleImageCard = useCallback(() => {
    router.push(`/news/${article?.id}`);
  }, []);
  return (
    <ArticleImageCardWrapper onClick={onClickArticleImageCard}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${article?.thumbnail ? article.thumbnail : NO_IMAGE_URL})` }}
      />
      <div className="card-desc">
        <h3>{article?.type}</h3>
        <h4>{article?.title}</h4>
      </div>
    </ArticleImageCardWrapper>
  );
};

export default ArticleImageCard;
