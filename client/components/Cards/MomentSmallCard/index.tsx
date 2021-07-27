import { IMainPost } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import { MomentSmallCardWrapper } from "./styles";

interface IProps {
  mainPost: IMainPost;
}
const MomentSmallCard: FC<IProps> = ({ mainPost }) => {
  const contentWithoutHTML = useMemo(() => {
    return mainPost?.content?.replace(/(<([^>]+)>)/gi, "").replace(/&.*;/gi, "");
  }, [mainPost]);

  const onClickMomentSmallCard = useCallback(() => {
    router.push(`/country/${mainPost?.code}/${mainPost?.id}`);
  }, []);

  return (
    <MomentSmallCardWrapper onClick={onClickMomentSmallCard}>
      <div className="memont-small-top">
        <div className="icon-wrapper">
          <img src={mainPost?.user?.icon} alt="article-image" />
        </div>
        <div>
          <span>
            {mainPost?.country?.name}/{mainPost?.type}
          </span>
          <span>{mainPost?.user?.name}</span>
          <span>2021/07/26</span>
        </div>
      </div>
      <h2>{contentWithoutHTML}</h2>
    </MomentSmallCardWrapper>
  );
};

export default MomentSmallCard;
