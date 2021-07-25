import { DoubleRightOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { StoryMainPosterWrapper } from "./styles";

interface IProps {
  story: IStory | undefined;
}

const StoryMainPoster: FC<IProps> = ({ story }) => {
  const onClickScrollDown = useCallback(() => {}, []);
  return (
    <StoryMainPosterWrapper>
      <div
        style={{
          backgroundImage: `url('${story?.thumbnail}')`,
        }}
        className="story-thumbnail"
      >
        <div className="story-title">
          <div className="overlay" />
          <h1>{story?.title}</h1>
          <NameSpace date={story?.createdAt!} user={story?.user!} />
        </div>
      </div>
      <div onClick={onClickScrollDown} className="scroll-down-btn">
        <a>
          <DoubleRightOutlined />
        </a>
      </div>
    </StoryMainPosterWrapper>
  );
};

export default StoryMainPoster;
