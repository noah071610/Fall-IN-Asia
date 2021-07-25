import BoxCard from "@components/Cards/BoxCard";
import React, { FC, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { StoryTopArticleListWrapper } from "./styles";

interface IProps {}

const StoryTopArticleList: FC<IProps> = () => {
  const scrollbars = useRef(null);
  const [state, setstate] = useState();
  return (
    <StoryTopArticleListWrapper>
      <BoxCard />
      <Scrollbars className="top-story-list" ref={scrollbars} autoHide>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <div className="image-wrapper">
            <img
              src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg"
              alt="article-image"
            />
          </div>
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
      </Scrollbars>
    </StoryTopArticleListWrapper>
  );
};

export default StoryTopArticleList;
