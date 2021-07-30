import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

interface IProps {
  name?: string;
}
const StoryMainPosterWrapper = styled.div`
  ${tw`relative w-full h-80`}
  ${FLEX_STYLE("center", "center")};
  .title {
    cursor: pointer;
    z-index: 1;
    ${FONT_STYLE(2, true, WHITE_COLOR)};
  }
`;
const StoryMainPoster: FC<IProps> = ({ name }) => {
  return (
    <StoryMainPosterWrapper
      style={{
        background: `url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg
        )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="overlay" />
      <h1 className="title">
        {name ? name + " 연대기" : "당신의 여행에는 어떤 스토리가 있었나요?"}
      </h1>
    </StoryMainPosterWrapper>
  );
};

export default StoryMainPoster;
