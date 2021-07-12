import React, { FC, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import Masonry from "react-masonry-css";
import {
  FLEX_STYLE,
  LG_SIZE,
  RGB_BLACK,
  toastErrorMessage,
  toastSuccessMessage,
  WHITE_COLOR,
} from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IGalleryPost } from "@typings/db";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { gallerySlice } from "slices/gallery";
import GalleryCard from "@components/Cards/GalleryCard";
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
`;

interface IProps {}

const gallery: FC<IProps> = () => {
  const { data: galleryPosts, error } = useSWR("/gallery", fetcher, {
    dedupingInterval: 10000,
  });
  const { user } = useSelector((state: RootState) => state.user);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }
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
          return <GalleryCard key={i} galleryPost={v} />;
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
