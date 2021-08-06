import styled from "@emotion/styled";
import { ELLIPSIS_STYLE } from "config";
import tw from "twin.macro";

export const MainAsideRightListWrapper = styled.aside`
  @media (max-width: 900px) {
    ${tw`hidden`}
  }
  ${tw`bg-white rounded-2xl h-full py-6 px-4 sticky`}
  top:6rem;
  width: 22%;
  .aside-title {
    ${tw`text-sm font-bold`};
    ${tw`mt-12 mb-4`}
  }
  .aside-title:first-of-type {
    ${tw`mt-0 mb-4`}
  }
  li {
    ${tw`w-full cursor-pointer`}
    .image-wrapper {
      ${tw`flex overflow-hidden rounded-md mb-4`}
      img {
        transition: 0.3s all;
        ${tw`w-16 h-16 rounded-md mr-4`}
      }
    }
    h4 {
      margin-bottom: 0.5rem;
    }
    p {
      ${ELLIPSIS_STYLE(1.3, 2, "40px")};
      ${tw`font-bold`};
      font-size: 0.94rem;
    }
  }
`;
