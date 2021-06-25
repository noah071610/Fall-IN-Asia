import React, { FC, useState } from "react";
import { AlbumCardWrapper, albumTitleCss } from "./styles";

interface IProps {
  isTop: boolean;
}

const AlbumCard: FC<IProps> = ({ isTop }) => {
  const [state, setstate] = useState();
  return (
    <AlbumCardWrapper>
      <div className="overlay" />
      <img src="https://user-images.githubusercontent.com/74864925/123346424-37529580-d593-11eb-8101-14921d9adac3.png" />
      <div css={albumTitleCss(isTop)}>
        <h3>MAP OF THE SOUL : 7</h3>
        <p>BTS</p>
      </div>
    </AlbumCardWrapper>
  );
};

export default AlbumCard;
