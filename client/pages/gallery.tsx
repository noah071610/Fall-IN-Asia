import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import Masonry from "react-masonry-css";
import faker from "faker";
import { FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

const GalleryWrapper = styled.div`
  padding: 2rem;
  .my-masonry-grid {
    margin-top: 2rem;
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }

  .my-masonry-grid_column > .gallery-card {
    margin: 0.3rem;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      .overlay {
        ${FLEX_STYLE("flex-end", "flex-start")};
        flex-direction: column;
      }
    }
    .gallery-img {
      border-radius: 5px;
      width: 100%;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: ${RGB_BLACK(0.15)};
      padding: 0.7rem;
      display: none;
      .gallery-title {
        color: ${WHITE_COLOR};
        margin: 0 0 0.4rem 0.15rem;
      }
      .gallery-user {
        ${FLEX_STYLE("flex-start", "center")};
        img {
          width: 2rem;
        }
        span {
          color: ${WHITE_COLOR};
          font-size: 0.75rem;
        }
      }
    }
  }
`;

interface IProps {}

const gallery: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <GalleryWrapper>
      <CommonTitle title="ギャラリー" subtitle="私だけ見るのが勿体ない" />
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="gallery-card">
          <img
            className="gallery-img"
            src="https://images.unsplash.com/photo-1625059920673-8a80c1bf4e14?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <div className="overlay">
            <h3 className="gallery-title">可愛いジョングク</h3>
            <div className="gallery-user">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
              <span>橋川ゆうき</span>
            </div>
          </div>
        </div>
      </Masonry>
    </GalleryWrapper>
  );
};

export default gallery;
