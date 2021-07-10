import { Rate } from "antd";
import React, { FC, memo, useState } from "react";
import { RecruitCardWrapper, CardMainContent, CardBtn } from "./styles";
import { CommentOutlined } from "@ant-design/icons";
import { IStudyPost } from "@typings/db";
interface IProps {
  studyPost: IStudyPost;
}

const RecruitCard: FC<IProps> = ({ studyPost }) => {
  return (
    <RecruitCardWrapper>
      <CardMainContent>
        <div className="recruit-icon">
          <img src={studyPost.leaderUser.icon} alt="recruit_icon" />
        </div>
        <div className="recruit-desc">
          <div>
            <a className="recruit-name">{studyPost.leaderUser.name}</a>
            <span className="tag">{studyPost.type}</span>
            <span className="tag">{studyPost.area}</span>
          </div>
          <h4>{studyPost.title}</h4>
          <Rate disabled defaultValue={5} />
          <p>
            <CommentOutlined />
            <span className="name">丹野**</span>
            <span>すごく分かりやすいです！おすすめです！</span>
          </p>
        </div>
      </CardMainContent>
      <CardBtn>
        <button className="basic-btn">プロフィール一覧</button>
        <button className="basic-btn">レッスン申込</button>
      </CardBtn>
    </RecruitCardWrapper>
  );
};

export default memo(RecruitCard);
