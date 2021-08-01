import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const MomentSmallCardWrapper = (isSearchPage?: boolean) => css`
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
    padding-left: 0.2rem;
    ${ELLIPSIS_STYLE(1.65, 2, "auto")};
    ${FONT_STYLE(0.8, true)}
  }
`;
