import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import { FC, useCallback } from "react";
import { ArticleCardWrapper } from "./styles";
import router from "next/router";
import html2textConverter from "utils/html2textConverter";

interface IProps {
  story: IStory;
}

const ArticleCard: FC<IProps> = ({ story }) => {
  const onClickArticleCard = useCallback(() => {
    router.push(`/story/${story?.code}/${story?.id}`);
  }, [story]);

  return (
    <article
      className="article-card-wrapper"
      css={ArticleCardWrapper()}
      onClick={onClickArticleCard}
    >
      <div className="image-wrapper">
        <img src={story?.thumbnail ? story.thumbnail : NO_IMAGE_URL} alt="article-thumbnail" />
        <ul className="like-comment">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments.length}</span>
          </li>
          <li>
            <HeartOutlined />
            <span className="count">{story?.likedUser.length}</span>
          </li>
        </ul>
      </div>
      <div className="story-main">
        <h2>{story?.title}</h2>
        <div className="story-info">
          <NameSpace date={story?.createdAt} user={story?.user} />
        </div>
        <div className="story-content">{html2textConverter(story?.content)}</div>
      </div>
    </article>
  );
};

export default ArticleCard;
