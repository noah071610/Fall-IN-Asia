import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import { FC, useCallback } from "react";
import { ArticleCardWrapper } from "./styles";
import router from "next/router";
import useHtmlConverter from "@hooks/useHtmlConverter";

interface IProps {
  story: IStory;
  isMain?: boolean;
}

const ArticleCard: FC<IProps> = ({ story, isMain }) => {
  const onClickArticleCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, [story]);

  return (
    <ArticleCardWrapper className="article-card-wrapper" onClick={onClickArticleCard}>
      <div style={isMain ? { width: "55%" } : {}} className="image-wrapper">
        <img src={story?.thumbnail ? story.thumbnail : NO_IMAGE_URL} alt="thai" />
        <ul className="like-comment-list">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments.length}</span>
          </li>
          <li>
            <LikeOutlined />
            <span className="count">{story?.likedUser.length}</span>
          </li>
        </ul>
      </div>
      <div className="story-main">
        <h2>{story?.title}</h2>
        <div className="story-info">
          <NameSpace date={story?.createdAt} user={story?.user} />
        </div>
        <div className="story-content">{useHtmlConverter(story?.content)}</div>
      </div>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
