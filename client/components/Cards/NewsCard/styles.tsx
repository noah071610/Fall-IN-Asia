import styled from "@emotion/styled";
import { BORDER_THIN, ELLIPSIS_STYLE, SM_SIZE } from "config";
import tw from "twin.macro";

export const NewsCardWrapper = styled.div`
  ${tw`cursor-pointer mb-4 flex shadow-md bg-white`}
  gap:0 1rem;
  &:hover {
    ${tw`shadow-lg`}
    .image-wrapper {
      img {
        transform: scale(1.15);
      }
    }
  }
  .image-wrapper {
    ${tw`overflow-hidden w-1/3 relative h-48 ml-6`}
    img {
      ${tw`h-48 w-full`}
      transition: 0.3s all;
    }
    .guide-label {
      transform: skewX(-35deg);
      ${tw`absolute top-2 -left-4 bg-blue-600 py-3 px-5 opacity-50 font-bold text-white`}
      span {
        ${tw`block ml-2`}
        transform: skewX(35deg);
      }
    }
  }

  .news-content {
    ${ELLIPSIS_STYLE(1.7, 3, "auto")};
  }
  .news-main {
    ${tw`w-2/3 px-4 pt-8 pb-10 mr-6`}
  }
  h2 {
    ${ELLIPSIS_STYLE(1, 1, "auto")};
    ${tw`text-xl font-bold mb-4`}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`block`}
    .image-wrapper {
      ${tw`ml-0 mb-4 w-full h-56`}
      img {
        ${tw`h-56`}
      }
      .guide-label {
        transform: skewX(-35deg);
        ${tw`top-2 -left-5 text-xl`}
        span {
          ${tw`block ml-2`}
          transform: skewX(35deg);
        }
      }
    }
    .news-content {
      ${ELLIPSIS_STYLE(1.7, 3, "auto")};
    }
    .news-main {
      ${tw`w-full px-4 pb-6 pt-0`}
    }
    h2 {
      ${ELLIPSIS_STYLE(1, 1, "auto")};
      ${tw`text-xl font-bold mb-4`}
    }
  }
`;
