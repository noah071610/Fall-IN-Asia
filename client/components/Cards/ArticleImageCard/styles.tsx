import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, RGB_BLACK, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const ArticleImageCardWrapper = styled.div`
  ${tw`relative overflow-hidden cursor-pointer rounded-md  mb-8`}
  &:hover {
    .card-image {
      transform: scale(1.15);
    }
  }
  .card-image {
    ${tw`rounded-md w-full h-52`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s all;
  }
  .card-desc {
    background: ${RGB_BLACK(0.45)};
    ${tw`absolute bottom-0 left-0 w-full p-2 leading-5`}
    h3 {
      ${FONT_STYLE(0.78, false, WHITE_COLOR)};
    }
    h4 {
      ${FONT_STYLE(0.85, true, WHITE_COLOR)};
    }
  }
`;
