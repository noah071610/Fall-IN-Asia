import { css } from "@emotion/react";
import { ELLIPSIS_STYLE, FLEX_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const ArticleCardWrapper = () => css`
  ${tw`cursor-pointer flex`}
  ${GRID_STYLE("2rem", "1.5fr 2.5fr")}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.15);
      }
    }
  }
  .image-wrapper {
    ${tw`rounded-md overflow-hidden relative`};
    img {
      ${tw`rounded-md h-60 w-full`};
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
    margin-top: 1rem;
    ${ELLIPSIS_STYLE(1.8, 5, "auto")};
  }
  h2 {
    ${tw`text-2xl font-bold mb-4 overflow-hidden`}
    ${ELLIPSIS_STYLE(1.5, 1, "auto")};
  }
  @media (max-width: 1000px) {
    ${GRID_STYLE("2rem", "repeat(2,1fr)")}
    h2 {
      ${ELLIPSIS_STYLE(1.5, 2, "auto")};
    }
    .story-content {
      ${ELLIPSIS_STYLE(1.8, 4, "auto")};
    }
  }
`;
