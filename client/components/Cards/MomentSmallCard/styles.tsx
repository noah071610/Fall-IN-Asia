import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const MomentSmallCardWrapper = styled.div`
  ${tw`w-full cursor-pointer mb-2`}
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
  .memont-small-top {
    ${GRID_STYLE("1rem", "1fr 2.5fr")};
    margin-bottom: 0.5rem;
    .icon-wrapper {
      ${tw`flex overflow-hidden rounded-md`}
      img {
        ${tw`w-full h-16 rounded-full `}
      }
    }
    div {
      span {
        ${tw`block mb-1`}
      }
    }
  }
  h2 {
    padding-left: 0.15rem;
    ${ELLIPSIS_STYLE(1.8, 2, "43px")};
    ${FONT_STYLE(0.8, true)}
  }
`;
