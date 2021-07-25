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
        backgroundImage: `url('${
          story?.thumbnail
            ? story?.thumbnail
            : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
        }')`,
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
