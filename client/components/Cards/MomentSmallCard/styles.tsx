import styled from "@emotion/styled";
import { FONT_STYLE } from "config";
import tw from "twin.macro";

export const MomentSmallCardWrapper = styled.div`
  ${tw`w-full cursor-pointer mb-6`}
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  .memont-small-top {
    ${tw`flex`}
    .icon-wrapper {
      ${tw`flex overflow-hidden rounded-md mr-4 mb-4`}
      img {
        ${tw`w-16 h-16 rounded-full `}
      }
    }
    div {
      span {
        ${tw`block mb-1`}
      }
    }
  }
  h2 {
    ${FONT_STYLE(0.94, true)}
  }
`;
