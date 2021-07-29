import { IMoment, IStory } from "@typings/db";
import React, { FC, useState } from "react";
import { UserPostListWrapper } from "./styles";

interface IProps {
  moments?: IMoment[];
  stories?: IStory[];
}

const UserPostList: FC<IProps> = ({ moments, stories }) => {
  const [state, setstate] = useState();
  return (
    <UserPostListWrapper>
      <li className="user-info-list-card">
        <h4>대만/관광지/14번째라이브</h4>
        <p>와 진짜 여기 대만에서 진짜 맛있는 쇼롱포에요 먹어봐요</p>
      </li>
      <li className="user-info-list-card">
        <h4>대만/관광지/14번째라이브</h4>
        <p>와 진짜 여기 대만에서 진짜 맛있는 쇼롱포에요 먹어봐요</p>
      </li>
      <li className="user-info-list-card">
        <h4>대만/관광지/14번째라이브</h4>
        <p>와 진짜 여기 대만에서 진짜 맛있는 쇼롱포에요 먹어봐요</p>
      </li>
    </UserPostListWrapper>
  );
};

export default UserPostList;
