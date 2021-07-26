import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, RGB_BLACK } from "config";
import tw from "twin.macro";

export const MainNavMenuWrapper = styled.nav`
  width: 18%;
  ${tw`bg-white rounded-2xl h-full p-4 sticky top-4`}
  .country {
    .country-img {
      ${tw`cursor-pointer inline-block w-full rounded-2xl`}
      img {
        ${tw`w-full h-28 shadow-md rounded-2xl`}
      }
    }
    .country-desc {
      margin: 1rem 0;
      a {
        ${FONT_STYLE(1.4, true)}
      }
      div {
        margin-top: 0.5rem;
        span {
          display: block;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  ul {
    ${tw`block text-base pt-4 `}
    li {
      ${tw`py-3 px-2 block cursor-pointer rounded-2xl `}
      .icon {
        ${tw`w-4 h-4 mr-3`}
      }
      &:hover {
        background: ${GRAY_COLOR};
      }
    }
  }
  .menu-active {
    background: ${GRAY_COLOR};
  }
`;
