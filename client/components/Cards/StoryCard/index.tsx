import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import React, { FC, useCallback, useState } from "react";
import { StoryCardWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";
import router from "next/router";

interface IProps {
  story: IStory;
}

const StoryCard: FC<IProps> = ({ story }) => {
  const onClickStoryCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, [story]);
  return (
    <StoryCardWrapper onClick={onClickStoryCard}>
      <div className="image-wrapper">
        <img src={story?.thumbnail ? story.thumbnail : NO_IMAGE_URL} alt="thai" />
        <ul className="like-comment-list">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments.length}</span>
          </li>
          <li>
            <LikeOutlined />
            <span className="count">{story?.likedUser.length}</span>
          </li>
        </ul>
      </div>
      <div className="story-main">
        <h2>{story?.title}</h2>
        <div className="story-info">
          <NameSpace date={story?.createdAt} user={story?.user} />
        </div>
        <div className="story-content">{ReactHtmlParser(story?.content as string)}</div>
      </div>
    </StoryCardWrapper>
  );
};

export default StoryCard;
