import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { FC, useState } from "react";
import { StoryPaginationWrapper } from "./styles";

interface IProps {}

const StoryPagination: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <StoryPaginationWrapper>
      <div className="pagination">
        <button className="btn-left">
          <div className="image-wrapper">
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDVfMTAy/MDAxNTc4MjE0NDkwNDAx.BglBTZ9Fu6xsKmbQiEpUMdSgHKS5wWyOgi-q8KMr4x8g.wO_60Od9p4VZQ-DGaE3qmZ5PSChW5M7AVWCa3jkbN98g.JPEG.mortareg/%EF%BB%BF%ED%91%B8%EC%BC%93_%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89_%EC%9D%BC%EC%A0%95_%EC%B6%94%EC%B2%9C_%EC%BD%94%EC%8A%A4_(13).JPG?type=w800"
              alt=""
            />
          </div>
          <Divider />
          <div className="btn-desc">
            <LeftCircleOutlined />
            <div>
              <h4>이전연대기</h4>
              아유타야 1화 케니와 함께하는
            </div>
          </div>
        </button>
        <button className="btn-right">
          <div className="image-wrapper">
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDVfMTAy/MDAxNTc4MjE0NDkwNDAx.BglBTZ9Fu6xsKmbQiEpUMdSgHKS5wWyOgi-q8KMr4x8g.wO_60Od9p4VZQ-DGaE3qmZ5PSChW5M7AVWCa3jkbN98g.JPEG.mortareg/%EF%BB%BF%ED%91%B8%EC%BC%93_%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89_%EC%9D%BC%EC%A0%95_%EC%B6%94%EC%B2%9C_%EC%BD%94%EC%8A%A4_(13).JPG?type=w800"
              alt=""
            />
          </div>
          <Divider />
          <div className="btn-desc">
            <div>
              <h4>다음연대기</h4>
              아유타야 3화 오랫만에 먹는 한식
            </div>
            <RightCircleOutlined />
          </div>
        </button>
      </div>
      <ul className="another-stories">
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
        <li>
          <img src="http://www.travelnbike.com/news/photo/201806/60535_93939_2917.jpg" alt="" />
          <div className="story-list-desc">
            <h4>대만</h4>
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>
          </div>
        </li>
      </ul>
    </StoryPaginationWrapper>
  );
};

export default StoryPagination;
