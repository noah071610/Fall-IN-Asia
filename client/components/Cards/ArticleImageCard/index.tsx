import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import router from "next/router";
import React, { FC, useCallback, useState } from "react";
import { ArticleImageCardWrapper } from "./styles";

interface IProps {
  story: IStory;
}

const ArticleImageCard: FC<IProps> = ({ story }) => {
  const onClickArticleImageCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, []);
  return (
    <ArticleImageCardWrapper onClick={onClickArticleImageCard}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${story?.thumbnail ? story.thumbnail : NO_IMAGE_URL})` }}
      />
      <div className="card-desc">
        <h3>{story?.country?.name} 연대기</h3>
        <h4>{story?.title}</h4>
      </div>
    </ArticleImageCardWrapper>
  );
};

export default ArticleImageCard;
