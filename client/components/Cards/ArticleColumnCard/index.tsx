import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import React, { FC, useCallback, useState } from "react";
import { ArticleColumnCardWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IStory } from "@typings/db";
import router from "next/router";

interface IProps {
  story: IStory;
  isMain?: boolean;
}

const ArticleColumnCard: FC<IProps> = ({ story, isMain }) => {
  const onClickArticleCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, []);

  return (
    <ArticleColumnCardWrapper
      onClick={onClickArticleCard}
      style={isMain ? { boxShadow: "none", borderRadius: "15px" } : {}}
    >
      <div
        style={isMain ? { borderTopLeftRadius: "15px", borderTopRightRadius: "15px" } : {}}
        className="image-wrapper"
      >
        <img
          style={isMain ? { borderTopLeftRadius: "15px", borderTopRightRadius: "15px" } : {}}
          src={story?.thumbnail}
          alt="story-image"
        />
      </div>
      <div className="box-card-info">
        <NameSpace date={story?.createdAt} user={story?.user} />
        <ul className="box-card-list">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments?.length}</span>
          </li>
          <li>
            <LikeOutlined />
            <span className="count">{story?.likedUser?.length}</span>
          </li>
        </ul>
      </div>
      <p>{story?.title}</p>
    </ArticleColumnCardWrapper>
  );
};

export default ArticleColumnCard;
