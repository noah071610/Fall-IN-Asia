import React, { FC, useState } from "react";
import { ClubPostTitleWrapper } from "./styles";
import { Divider } from "antd";
interface IProps {}

const ClubPostTitle: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ClubPostTitleWrapper>
      <h1>初めまして！</h1>
      <ul className="post-title-info">
        <li>佐藤真由美</li>
        <Divider type="vertical" />
        <li>2021/06/29</li>
        <Divider type="vertical" />
        <li>24 views</li>
      </ul>
    </ClubPostTitleWrapper>
  );
};

export default ClubPostTitle;
