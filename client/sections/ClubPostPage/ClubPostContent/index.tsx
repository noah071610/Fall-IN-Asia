import React, { FC } from "react";
import { ClubPostContentWrapper } from "./styles";
import { IClubPost } from "@typings/db";
import ReactHtmlParser from "react-html-parser";

interface IProps {
  postData?: IClubPost;
}

const ClubPostContent: FC<IProps> = ({ postData }) => {
  return (
    <ClubPostContentWrapper>
      <div className="post-main">{ReactHtmlParser(postData?.content as string)}</div>
    </ClubPostContentWrapper>
  );
};

export default ClubPostContent;
