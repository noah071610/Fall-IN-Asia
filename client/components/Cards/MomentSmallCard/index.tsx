import useHtmlConverter from "@hooks/useHtmlConverter";
import { IMainPost, IStory } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import { MomentSmallCardWrapper } from "./styles";
import dayjs from "dayjs";

interface IProps {
  mainPost?: IMainPost;
  story?: IStory;
}
const MomentSmallCard: FC<IProps> = ({ mainPost, story }) => {
  const onClickMomentSmallCard = useCallback(() => {
    if (mainPost) {
      router.push(`/country/${mainPost?.code}/${mainPost?.id}`);
    } else {
      router.push(`/story/${story?.code}/${story?.id}`);
    }
  }, []);

  return (
    <MomentSmallCardWrapper onClick={onClickMomentSmallCard}>
      <div className="memont-small-top">
        <div className="icon-wrapper">
          <img
            style={story ? { borderRadius: "5px" } : {}}
            src={mainPost?.user?.icon || story?.thumbnail}
            alt="article-image"
          />
        </div>
        <div>
          <span>
            {story && "연대기/"}
            {(mainPost || story)?.country?.name}
            {mainPost && "/" + mainPost?.type}
          </span>
          <span>{(mainPost || story)?.user?.name}</span>
          <span>{dayjs((mainPost || story)?.createdAt).format("YYYY/MM/DD")}</span>
        </div>
      </div>
      <h2>{useHtmlConverter(mainPost?.content || story?.title)}</h2>
    </MomentSmallCardWrapper>
  );
};

export default MomentSmallCard;
