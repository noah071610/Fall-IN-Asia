import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { FC, useState } from "react";
import { StoryPostPaginationWrapper } from "./styles";

interface IProps {}

const StoryPostPagination: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <StoryPostPaginationWrapper>
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
    </StoryPostPaginationWrapper>
  );
};

export default StoryPostPagination;
