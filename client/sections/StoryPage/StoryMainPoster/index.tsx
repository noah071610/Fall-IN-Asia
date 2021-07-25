import React, { FC, useState } from "react";
import { StoryMainPosterWrapper } from "./styles";

interface IProps {}

const StoryMainPoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <StoryMainPosterWrapper>
      <div className="overlay" />
      <h1 className="title">울고 웃었던 당신의 소중한 연대기를 저희도 따라가볼래요.</h1>
    </StoryMainPosterWrapper>
  );
};

export default StoryMainPoster;
