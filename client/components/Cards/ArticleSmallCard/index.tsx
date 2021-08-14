import html2textConverter from "utils/html2textConverter";
import { IArticle, IMoment, IStory } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import { ArticleSmallCardWrapper } from "./styles";
import dayjs from "dayjs";

interface IProps {
  moment?: IMoment;
  story?: IStory;
  article?: IArticle;
  isSearchPage?: boolean;
}
const ArticleSmallCard: FC<IProps> = ({ isSearchPage, moment, story, article }) => {
  const onClickArticleSmallCard = useCallback(() => {
    if (moment) {
      router.push(`/country/${moment?.code}/${moment?.id}`);
    } else {
      router.push(`/story/${story?.code}/${story?.id}`);
    }
  }, []);

  return (
    <article css={ArticleSmallCardWrapper(isSearchPage)} onClick={onClickArticleSmallCard}>
      <div className="memont-small-top">
        <div className="image-wrapper">
          <img
            style={story || article ? { borderRadius: "5px" } : {}}
            src={moment?.user?.icon || (story || article)?.thumbnail}
            alt="card-image"
          />
        </div>
        <div className="small-card-info">
          <span>
            {story && `${story?.country?.name}/연대기`}
            {article && `${article?.country?.name}/${article?.type}`}
            {moment && `${moment?.country?.name}/${moment?.type}`}
          </span>
          {(moment || story) && <span>{(moment || story)?.user?.name}</span>}
          <span>{dayjs((moment || story || article)?.createdAt).format("YYYY/MM/DD")}</span>
        </div>
      </div>
      <h2>{html2textConverter(moment?.content || story?.title || article?.title)}</h2>
    </article>
  );
};

export default ArticleSmallCard;
