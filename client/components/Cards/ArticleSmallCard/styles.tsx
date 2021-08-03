import { css } from "@emotion/react";
import { ELLIPSIS_STYLE, FLEX_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const ArticleSmallCardWrapper = (isSearchPage?: boolean) => css`
  ${tw`w-full cursor-pointer mb-6`}
  ${isSearchPage && tw`shadow-md px-4 pt-4 pb-8 mb-0`}
  transition:0.3s all;
  &:hover {
    ${isSearchPage && tw`shadow-lg`}
  }
  .memont-small-top {
    ${GRID_STYLE("1rem", "4.3rem 2.5fr")};
    margin-bottom: 1rem;
    .image-wrapper {
      ${tw`flex overflow-hidden rounded-md`}
      img {
        ${tw`rounded-full `}
        width:4.3rem;
        height: 4.3rem;
      }
    }
    .small-card-info {
      ${FLEX_STYLE("center", "flex-start", "column")}
      span {
        ${tw`block mb-1 text-xs`}
      }
    }
  }
  h2 {
    ${tw`pl-1 font-bold hover:underline`}
    ${ELLIPSIS_STYLE(1.65, 2, "auto")};
    font-size: 0.8rem;
  }
`;
