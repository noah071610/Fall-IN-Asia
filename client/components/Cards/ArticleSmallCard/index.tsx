import html2textConverter from "utils/html2textConverter";
import { IArticle, IMoment, IStory } from "@typings/db";
import router from "next/router";
import React, { FC, memo, useCallback } from "react";
import { ArticleSmallCardWrapper } from "./styles";
import dayjs from "dayjs";
import { NO_IMAGE_URL } from "config";
import { useTranslation } from "react-i18next";

interface IProps {
  moment?: IMoment;
  story?: IStory;
  article?: IArticle;
  isSearchPage?: boolean;
}
const ArticleSmallCard: FC<IProps> = ({ isSearchPage, moment, story, article }) => {
  const { t } = useTranslation("common");
  const onClickArticleSmallCard = useCallback(() => {
    if (moment) {
      router.push(`/country/${moment?.code}/${moment?.id}`);
    } else if (story) {
      router.push(`/story/${story?.code}/${story?.id}`);
    } else {
      router.push(`/news/${article?.id}`);
    }
  }, [moment, story, article]);

  return (
    <article css={ArticleSmallCardWrapper(isSearchPage)} onClick={onClickArticleSmallCard}>
      <div className="memont-small-top">
        <div className="image-wrapper">
          <img
            style={story || article ? { borderRadius: "5px" } : {}}
            src={moment?.user?.icon || (story || article)?.thumbnail || NO_IMAGE_URL}
            alt="card-image"
          />
        </div>
        <div className="small-card-info">
          <span>
            {story && t(`country.${story?.country?.name}`) + " / " + t(`nav.story`)}
            {article && t(`country.${article?.country?.name}`) + " / " + t(`nav.${article?.type}`)}
            {moment && t(`country.${moment?.country?.name}`) + " / " + t(`nav.${moment?.type}`)}
          </span>
          {(moment || story) && <span>{(moment || story)?.user?.name}</span>}
          <span>{dayjs((moment || story || article)?.createdAt).format("YYYY/MM/DD")}</span>
        </div>
      </div>
      <h2>{html2textConverter(moment?.content || story?.title || article?.title)}</h2>
    </article>
  );
};

export default memo(ArticleSmallCard);
