import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const MomentSmallCardWrapper = styled.div`
  ${tw`w-full cursor-pointer mb-6`}
  &:hover {
    h2 {
      text-decoration: underline;
    }
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
