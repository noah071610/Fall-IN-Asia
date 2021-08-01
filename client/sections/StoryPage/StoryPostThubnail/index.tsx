import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import { Divider } from "antd";
import React, { FC, memo } from "react";
import { StoryPostThubnailWrapper } from "./styles";

interface IProps {
  story: IStory | undefined;
}

const StoryPostThubnail: FC<IProps> = ({ story }) => {
  return (
    <StoryPostThubnailWrapper>
      <div className="story-title">
        <h1>{story?.title}</h1>
        <NameSpace date={story?.createdAt!} user={story?.user!} />
      </div>
      <Divider />
      <img className="thumbnail" src={story?.thumbnail} />
    </StoryPostThubnailWrapper>
  );
};

export default memo(StoryPostThubnail);
