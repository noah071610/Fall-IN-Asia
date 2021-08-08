import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import React, { FC, useCallback } from "react";
import { ArticleColumnCardWrapper } from "./styles";
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
      className="article-card-column-wrapper"
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
        <ul className="like-comment">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments?.length}</span>
          </li>
          <li>
            <HeartOutlined />
            <span className="count">{story?.likedUser?.length}</span>
          </li>
        </ul>
      </div>
      <div className="box-card-info">
        <NameSpace date={story?.createdAt} user={story?.user} />
      </div>
      <p>{story?.title}</p>
    </ArticleColumnCardWrapper>
  );
};

export default ArticleColumnCard;