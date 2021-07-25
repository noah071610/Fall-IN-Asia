import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRAY_COLOR, WHITE_COLOR, WHITE_STYLE } from "config";
import tw from "twin.macro";

export const GuideCardWrapper = styled.div`
  ${tw`cursor-pointer py-4 mb-4 flex`}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    ${tw`rounded-xl overflow-hidden w-3/5 relative`}
    img {
      ${tw`rounded-xl h-60 w-full `}
      transition: 0.3s all;
    }
    .guide-label {
      transform: skewX(-35deg);
      ${tw`absolute top-3 -left-4 bg-blue-600 py-3 px-5 opacity-50 font-bold text-white`}
      span {
        ${tw`block ml-2`}
        transform: skewX(35deg);
      }
    }
  }

  .story-info {
    ${FLEX_STYLE("flex-start", "flex-end")};
  }
  .story-content {
    padding: 1rem 0;
    line-height: 1.7;
  }
  .story-main {
    padding-left: 2rem;
    width: 60%;
  }
  h2 {
    ${FONT_STYLE(1.2, true)};
    padding-bottom: 1rem;
  }
`;
