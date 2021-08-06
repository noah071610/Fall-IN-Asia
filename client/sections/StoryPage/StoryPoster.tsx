import React, { FC } from "react";
import styled from "@emotion/styled";
import { FLEX_STYLE, SM_SIZE } from "config";
import tw from "twin.macro";

interface IProps {
  image?: string;
  name?: string;
}
const StoryPosterWrapper = styled.div`
  ${tw`relative w-full h-80`}
  background-repeat: no-repeat;
  ${FLEX_STYLE("center", "center")};
  .title {
    ${tw`text-3xl font-bold text-white cursor-pointer z-10`};
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`h-52`}
    .title {
      ${tw`text-lg px-4 text-center`}
    }
  }
`;
const StoryPoster: FC<IProps> = ({ name, image }) => {
  return (
    <StoryPosterWrapper
      style={
        image
          ? {
              background: `url(${image}
          )`,
              backgroundPosition: "10% 40%",
              backgroundSize: "100% 230%",
            }
          : {
              background: `url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg
        )`,
              backgroundPosition: "top left",
              backgroundSize: "100% 100%",
            }
      }
    >
      <div className="overlay" />
      <h1 className="title">
        {name ? name + " 연대기" : "당신의 여행에는 어떤 스토리가 있었나요?"}
      </h1>
    </StoryPosterWrapper>
  );
};

export default StoryPoster;
