import React, { FC, useEffect, useState } from "react";
import { StoryPostOwnerWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL } from "config";
import { IStory } from "@typings/db";

interface IProps {
  story: IStory;
}

const StoryPostOwner: FC<IProps> = ({ story }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <StoryPostOwnerWrapper>
      <div className="owner-info-wrapper">
        <div className="icon">
          <img src={story?.user?.icon ? story.user.icon : DEFAULT_ICON_URL} alt="" />
        </div>
        <div className="info">
          <h2 className="name">{story?.user.name}</h2>
          <p className="introduce">여행이 너무 즐겁고 설레는 노아입니다.</p>
        </div>
        <div className="links">
          <button>프로필 구경가기</button>
        </div>
      </div>
    </StoryPostOwnerWrapper>
  );
};

export default StoryPostOwner;
