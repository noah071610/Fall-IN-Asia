import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const ImageCardWrapper = styled.div`
  ${tw`relative rounded-xl w-full h-full cursor-pointer`}
  background-position: center;
  background-repeat: no-repeat;
  ${FLEX_STYLE("center", "center")};
  .overlay {
    ${tw`rounded-2xl`}
  }
  h3 {
    ${tw`z-10`}
    ${FONT_STYLE(1.5, true, WHITE_COLOR)};
  }
  &:hover {
    .overlay {
      ${tw`opacity-30`}
    }
  }
`;
