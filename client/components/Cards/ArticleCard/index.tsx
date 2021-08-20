import { CommentOutlined, EyeOutlined, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IStory } from "@typings/db";
import { NO_IMAGE_URL } from "config";
import { FC, memo, useCallback } from "react";
import { ArticleCardWrapper } from "./styles";
import router from "next/router";
import html2textConverter from "utils/html2textConverter";
import { kmtb_Formatter } from "utils/kmbtFormatter";

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
        <ul className="article-info-list">
          <li>
            <CommentOutlined />
            <span className="count">{story?.comments?.length}</span>
          </li>
          <li>
            <HeartOutlined />
            <span className="count">{kmtb_Formatter(story?.likedUser?.length)}</span>
          </li>
          <li>
            <EyeOutlined />
            <span className="count">{story?.hit ? kmtb_Formatter(story?.hit) : 0}</span>
          </li>
        </ul>
      </div>
      <div className="story-main">
        <h2>{story?.title}</h2>
        <div className="story-info">
          <NameSpace date={story?.createdAt} user={story?.user} />
        </div>
        <div className="story-content">{html2textConverter(story?.content)?.slice(0, 350)}</div>
      </div>
    </article>
  );
};

export default memo(ArticleCard);
