import { IMainPost } from "@typings/db";
import React, { FC, useState } from "react";
import { MomentSmallCardWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";

interface IProps {
  mainPost: IMainPost;
}
const MomentSmallCard: FC<IProps> = ({ mainPost }) => {
  const [state, setstate] = useState();
  return (
    <MomentSmallCardWrapper>
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
      <h2>{ReactHtmlParser(mainPost?.content as string)}</h2>
    </MomentSmallCardWrapper>
  );
};

export default MomentSmallCard;
