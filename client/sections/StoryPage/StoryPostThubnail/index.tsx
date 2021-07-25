import { DoubleRightOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import React, { FC, useCallback, useEffect, useState } from "react";
import { StoryPostThubnailWrapper } from "./styles";

interface IProps {
  story: IStory | undefined;
  onClickScrollDown: () => void;
}

const StoryPostThubnail: FC<IProps> = ({ onClickScrollDown, story }) => {
  return (
    <StoryPostThubnailWrapper
      style={{
        backgroundImage: `url('${story?.thumbnail}')`,
      }}
    >
      <div className="story-title">
        <div className="overlay" />
        <h1>{story?.title}</h1>
        <NameSpace date={story?.createdAt!} user={story?.user!} />
      </div>
      <div onClick={onClickScrollDown} className="scroll-down-btn">
        <a>
          <DoubleRightOutlined rotate={90} />
        </a>
      </div>
    </StoryPostThubnailWrapper>
  );
};

export default StoryPostThubnail;
