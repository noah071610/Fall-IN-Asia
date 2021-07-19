import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL } from "config";
import React, { FC, useState } from "react";
import { ArticleCardWrapper } from "./styles";

interface IProps {}

const ArticleCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ArticleCardWrapper>
      <div className="article-top">
        <div className="name-space">
          <div className="icon">
            <img src={DEFAULT_ICON_URL} alt="" />
          </div>
          <div>
            <h3>장현수마마</h3>
            <span className="date">2021/07/19</span>
          </div>
        </div>
        <div>
          <button className="tag">놀거리</button>
        </div>
      </div>
      <div className="article">
        <p>
          방탄소년단(BTS)의 신곡 ’버터'가 미국 빌보드 메인 싱글 차트 핫 100에서 4주 연속 1위를
          차지하며 한국 대중음악의 새 기록을 썼다. 핫 100은 스트리밍(온라인 실시간 재생 실적)과 음원
          판매량, 라디오 방송 횟수 등을 종합해 매주 미국에서 가장 인기 있는 노래 순위를 집계하는
          차트다.
        </p>
        <div className="image-list"></div>
        <ul className="article-footer">
          <li>
            <CommentOutlined />
            <span className="count">0</span>
            <span>댓글</span>
          </li>
          <li>
            <LikeOutlined />
            <span className="count">0</span>
            <span>좋아요</span>
          </li>
        </ul>
      </div>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
