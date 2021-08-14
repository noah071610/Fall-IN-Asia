import styled from "@emotion/styled";
import { FLEX_STYLE, GRAY_COLOR } from "config";
import tw from "twin.macro";

export const MainAsideLeftNavWrapper = styled.nav`
  @media (max-width: 900px) {
    ${tw`hidden`}
  }
  ${tw`bg-white rounded-2xl h-full p-4 sticky`}
  top:5rem;
  width: 18%;
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
        ${tw`font-bold`};
        font-size: 1.4rem;
      }
      div {
        ${tw`font-bold`};
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
      ${tw`py-3 px-2 block cursor-pointer rounded-2xl mb-1 `}
      ${FLEX_STYLE("flex-start", "center")};
      .icon {
        ${tw`w-5 h-5 mr-4`}
      }
      span {
        ${tw`text-sm`}
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
