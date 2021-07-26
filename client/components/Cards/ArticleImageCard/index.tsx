import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import React, { FC, useState } from "react";
import { ArticleImageCardWrapper } from "./styles";

interface IProps {
  story: IStory;
}

const ArticleImageCard: FC<IProps> = ({ story }) => {
  const [state, setstate] = useState();
  return (
    <ArticleImageCardWrapper>
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
