import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ELLIPSIS_STYLE,
  FLEX_STYLE,
  FONT_STYLE,
  GRAY_COLOR,
  WHITE_COLOR,
  WHITE_STYLE,
} from "config";
import tw from "twin.macro";

export const ArticleCardWrapper = (isMain?: boolean) => css`
  ${isMain ? tw`p-6 mb-4` : tw`py-8 px-4`}
  ${tw`cursor-pointer flex`}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    ${isMain ? tw`rounded-xl w-3/5` : tw`rounded-md w-2/5`};
    ${tw`overflow-hidden relative`}
    img {
      ${isMain ? tw`rounded-xl ` : tw`rounded-md`};
      ${tw`h-60 w-full `}
      transition: 0.3s all;
    }
    .like-comment-list {
      ${tw`absolute bottom-4 right-4 bg-white py-1 px-2 opacity-50 rounded-xl`}
      li {
        ${tw`p-1 cursor-pointer`}
        .count {
          margin: 0 0.3rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
      }
    }
  }

  .story-info {
    ${FLEX_STYLE("flex-start", "flex-end")};
  }
  .story-content {
    ${ELLIPSIS_STYLE(1.8, 4, "120px")};
    padding: 1rem 0;
  }
  .story-main {
    padding-left: 2rem;
    width: 60%;
  }
  h2 {
    ${tw`text-xl font-bold pb-4`}
  }
`;
