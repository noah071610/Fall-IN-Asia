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
}

const ArticleColumnCard: FC<IProps> = ({ story }) => {
  const onClickArticleCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, []);

  return (
    <ArticleColumnCardWrapper onClick={onClickArticleCard} className="box-card">
      <div className="image-wrapper">
        <img src={story?.thumbnail} alt="thai" />
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
      <h2>{story?.title}</h2>
    </ArticleColumnCardWrapper>
  );
};

export default ArticleColumnCard;
