import useHtmlConverter from "@hooks/useHtmlConverter";
import { IMoment, IStory } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import { MomentSmallCardWrapper } from "./styles";
import dayjs from "dayjs";

interface IProps {
  moment?: IMoment;
  story?: IStory;
}
const MomentSmallCard: FC<IProps> = ({ moment, story }) => {
  const onClickMomentSmallCard = useCallback(() => {
    if (moment) {
      router.push(`/country/${moment?.code}/${moment?.id}`);
    } else {
      router.push(`/story/${story?.code}/${story?.id}`);
    }
  }, []);

  return (
    <MomentSmallCardWrapper onClick={onClickMomentSmallCard}>
      <div className="memont-small-top">
        <div className="image-wrapper">
          <img
            style={story ? { borderRadius: "5px" } : {}}
            src={moment?.user?.icon || story?.thumbnail}
            alt="article-image"
          />
        </div>
        <div className="small-card-info">
          <span>
            {story && "연대기/"}
            {(moment || story)?.country?.name}
            {moment && "/" + moment?.type}
          </span>
          <span>{(moment || story)?.user?.name}</span>
          <span>{dayjs((moment || story)?.createdAt).format("YYYY/MM/DD")}</span>
        </div>
      </div>
      <h2>{useHtmlConverter(moment?.content || story?.title)}</h2>
    </MomentSmallCardWrapper>
  );
};

export default MomentSmallCard;
