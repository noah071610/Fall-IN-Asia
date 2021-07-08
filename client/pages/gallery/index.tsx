import React, { FC } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import Masonry from "react-masonry-css";
import { FLEX_STYLE, RGB_BLACK, toastErrorMessage, WHITE_COLOR } from "config";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IGalleryPost } from "@typings/db";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
const GalleryWrapper = styled.div`
  padding: 2rem;
  position: relative;
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
      transform: translateY(-5px);
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
      border-radius: 5px;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: ${RGB_BLACK(0.3)};
      padding: 0.7rem;
      display: none;
      .gallery-title {
        color: ${WHITE_COLOR};
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
      }
      .gallery-user {
        ${FLEX_STYLE("flex-start", "center")};
        img {
          width: 2rem;
          border-radius: 50%;
          margin-right: 0.7rem;
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
  const { data: galleryPosts, error } = useSWR("/gallery", fetcher, {
    dedupingInterval: 10000,
  });
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <GalleryWrapper>
      <CommonTitle title="ギャラリー" subtitle="私だけ見るのが勿体ない">
        {user && (
          <button
            onClick={() => {
              router.push("/gallery/post");
            }}
            className="basic-btn"
          >
            写真投稿
          </button>
        )}
      </CommonTitle>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryPosts?.map((v: IGalleryPost, i: number) => {
          return (
            <div key={i} className="gallery-card">
              <img className="gallery-img" src={v.image} alt={v.title} />
              <div className="overlay">
                <h3 className="gallery-title">{v.title}</h3>
                <div className="gallery-user">
                  <img src={v.user.icon} alt={v.user.name} />
                  <span>{v.user.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Masonry>
      <div className="big-margin-div" />
    </GalleryWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      return {
        props: {},
      };
    }
);

export default gallery;
