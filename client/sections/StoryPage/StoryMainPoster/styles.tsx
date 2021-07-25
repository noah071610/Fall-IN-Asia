import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const StoryMainPosterWrapper = styled.div`
  ${tw`relative w-full h-80`}
  background: url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg) no-repeat top left / 100% 100%;
  ${FLEX_STYLE("center", "center")};
  .title {
    cursor: pointer;
    z-index: 1;
    ${FONT_STYLE(2, true, WHITE_COLOR)};
  }
`;
