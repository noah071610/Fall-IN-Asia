import React, { FC, useEffect, useMemo, useState } from "react";
import { ClubPostContentWrapper } from "./styles";
import { Divider } from "antd";
import { IClubPost } from "@typings/db";
import ReactHtmlParser from "react-html-parser";

interface IProps {
  postData: IClubPost;
}

const ClubPostContent: FC<IProps> = ({ postData }) => {
  return (
    <ClubPostContentWrapper>
      <div className="post-main">{ReactHtmlParser(postData?.content as string)}</div>
      <div className="like-section">
        <button className="basic-btn like-btn">
          <img src="https://image.flaticon.com/icons/png/24/456/456115.png" />
          <span className="like-number">0</span>
        </button>
        <button className="basic-btn like-btn">
          <span className="like-number">0</span>
          <img className="reverse" src="https://image.flaticon.com/icons/png/24/456/456115.png" />
        </button>
      </div>
    </ClubPostContentWrapper>
  );
};

export default ClubPostContent;
