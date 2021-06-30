import { Rate } from "antd";
import React, { FC, useState } from "react";
import { LessonCardWrapper, CardMainContent, CardBtn } from "./styles";
import { CommentOutlined } from "@ant-design/icons";
interface IProps {}

const LessonCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <LessonCardWrapper>
      <CardMainContent className="lesson-main">
        <div className="lesson-icon">
          <img src="https://avatars.githubusercontent.com/u/74864925?v=4" alt="lesson_icon" />
        </div>
        <div className="lesson-desc">
          <a className="lesson-name">ジャンヒョンス</a>
          <h4>日韓通訳士の楽しい韓国語レッスン</h4>
          <Rate disabled defaultValue={5} />
          <p>
            <CommentOutlined />
            <span className="name">丹野**</span>
            <span>すごく分かりやすいです！おすすめです！</span>
          </p>
        </div>
      </CardMainContent>
      <CardBtn>
        <button>プロフィール一覧</button>
        <button>レッスン申込</button>
      </CardBtn>
    </LessonCardWrapper>
  );
};

export default LessonCard;
