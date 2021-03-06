import React, { FC, memo, useCallback } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IStory } from "@typings/db";
import router, { useRouter } from "next/router";
import { PostPaginationWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { GRAY_COLOR, noRevalidate, NO_IMAGE_URL } from "config";
import { useTranslation } from "react-i18next";

interface IProps {
  userId: number;
}

const PostPagination: FC<IProps> = ({ userId }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const { data: sidePosts } = useSWR<{ prevPost: IStory; nextPost: IStory }>(
    `/story/side/${query?.storyId}/${userId}`,
    fetcher,
    noRevalidate
  );

  const onClickStoryBtn = useCallback((id?: number, code?: string) => {
    router.push(`/story/${code}/${id}`);
  }, []);
  return (
    <PostPaginationWrapper>
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
            <img src={sidePosts?.prevPost?.thumbnail || NO_IMAGE_URL} alt="pagination_image" />
          </div>
          <div className="post-desc">
            <LeftOutlined />
            <div>
              <h3>{t("post.prevStory")}</h3>
              <h4 className="post-title">{sidePosts?.prevPost?.title || t("main.noStory")}</h4>
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
            <img src={sidePosts?.nextPost?.thumbnail || NO_IMAGE_URL} alt="pagination_image" />
          </div>
          <div className="post-desc">
            <div>
              <h3>{t("post.nextStory")}</h3>
              <h4 className="post-title">{sidePosts?.nextPost?.title || t("main.noStory")}</h4>
            </div>
            <RightOutlined />
          </div>
        </div>
      </div>
    </PostPaginationWrapper>
  );
};

export default memo(PostPagination);
