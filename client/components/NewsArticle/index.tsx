import React, { FC, useState } from "react";
import { NewsArticleWrapper } from "./styles";

interface IProps {}

const NewsArticle: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <NewsArticleWrapper>
      <div className="news-image-wrapper">
        <img src="https://chosunbiz-chosunbiz-prod.cdn.arcpublishing.com/resizer/STPVmV3EHPr6071VSeH8UFXcUWM=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZD4UFWB3WJCYHPWSMZV6OT5EEY.png" />
      </div>
      <div>
        <h2>BTS ‘버터’, 빌보드 싱글 차트 4주 연속 1위</h2>
        <p>
          방탄소년단(BTS)의 신곡 ’버터'가 미국 빌보드 메인 싱글 차트 핫 100에서 4주 연속 1위를
          차지하며 한국 대중음악의 새 기록을 썼다. 핫 100은 스트리밍(온라인 실시간 재생 실적)과 음원
          판매량, 라디오 방송 횟수 등을 종합해 매주 미국에서 가장 인기 있는 노래 순위를 집계하는
          차트다.
        </p>
      </div>
    </NewsArticleWrapper>
  );
};

export default NewsArticle;
