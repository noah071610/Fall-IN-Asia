import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import React, { FC, useCallback, useState } from "react";
import { GuideCardWrapper } from "./styles";
import router from "next/router";

interface IProps {
  story: IStory;
}

const GuideCard: FC<IProps> = ({ story }) => {
  const onClickGuideCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, [story]);
  return (
    <GuideCardWrapper onClick={onClickGuideCard}>
      <div className="image-wrapper">
        <img src={story?.thumbnail ? story.thumbnail : NO_IMAGE_URL} alt="thai" />
        <div className="guide-label">
          <span>기간한정 가이드</span>
        </div>
      </div>
      <div className="story-main">
        <h2>{story?.title || "신설 여행 가이드!"}</h2>
        <ul className="story-info">
          <li>아웃도어</li>
          <li>픽업서비스</li>
          <li>조식제공</li>
        </ul>
        <p className="story-content">
          세탁 대행, 청소 대행, 세차, 발레파킹 등 고급 호텔에 버금가는 편의 서비스를 제공하고
          있습니다. 그중에서도 가장 주목을 받는 점은 입주를 시작한 2017년 6월부터 현재까지 꾸준히
          입주민에게 조식 서비스를 제공하고 있다는 것인데요,
        </p>
      </div>
    </GuideCardWrapper>
  );
};

export default GuideCard;
