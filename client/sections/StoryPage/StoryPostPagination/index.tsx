import {
  LeftCircleOutlined,
  LeftOutlined,
  RightCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { IStory } from "@typings/db";
import { Divider } from "antd";
import router, { useRouter } from "next/router";
import React, { FC, useCallback, useState } from "react";
import { StoryPostPaginationWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { GRAY_COLOR, NO_IMAGE_URL } from "config";

interface IProps {
  userId: number;
}

const StoryPostPagination: FC<IProps> = ({ userId }) => {
  const { query } = useRouter();
  const { data: sidePosts } = useSWR<{ prevPost: IStory; nextPost: IStory }>(
    `/story/side/${query?.storyId}/${userId}`,
    fetcher
  );

  const onClickStoryBtn = useCallback((id?: number, code?: string) => {
    router.push(`/story/${code}/${id}`);
  }, []);
  return (
    <StoryPostPaginationWrapper>
      <div className="pagination">
        <div
          style={sidePosts?.prevPost ? {} : { background: GRAY_COLOR }}
          onClick={() => {
            sidePosts?.prevPost &&
              onClickStoryBtn(sidePosts?.prevPost?.id, sidePosts?.prevPost?.code);
          }}
          className="side-post prev-post"
        >
          <div className="image-wrapper">
            <img src={sidePosts?.prevPost?.thumbnail || NO_IMAGE_URL} alt="" />
          </div>
          <Divider />
          <div className="post-desc">
            <LeftOutlined />
            <div>
              <h4>이전연대기</h4>
              <h4 className="post-title">{sidePosts?.prevPost?.title || "포스트가 없습니다."}</h4>
            </div>
          </div>
        </div>
        <div
          style={sidePosts?.nextPost ? {} : { background: GRAY_COLOR }}
          onClick={() => {
            sidePosts?.nextPost &&
              onClickStoryBtn(sidePosts?.nextPost?.id, sidePosts?.nextPost?.code);
          }}
          className="side-post next-post"
        >
          <div className="image-wrapper">
            <img src={sidePosts?.nextPost?.thumbnail || NO_IMAGE_URL} alt="" />
          </div>
          <Divider />
          <div className="post-desc">
            <div>
              <h4>다음연대기</h4>
              <h4 className="post-title">{sidePosts?.nextPost?.title || "포스트가 없습니다."}</h4>
            </div>
            <RightOutlined />
          </div>
        </div>
      </div>
    </StoryPostPaginationWrapper>
  );
};

export default StoryPostPagination;
