import styled from "@emotion/styled";
import { ELLIPSIS_STYLE } from "config";
import tw from "twin.macro";

export const NewsCardWrapper = styled.div`
  ${tw`cursor-pointer py-4 mb-4 flex`}
  gap:0 2rem;
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.15);
      }
    }
  }
  .image-wrapper {
    ${tw`rounded-xl overflow-hidden w-1/2 relative`}
    img {
      ${tw`rounded-xl h-60 w-full `}
      transition: 0.3s all;
    }
    .guide-label {
      transform: skewX(-35deg);
      ${tw`absolute top-3 -left-4 bg-blue-600 py-3 px-5 opacity-50 font-bold text-white`}
      span {
        ${tw`block ml-2`}
        transform: skewX(35deg);
      }
    }
  }

  .news-content {
    ${ELLIPSIS_STYLE(1.7, 6, "140px")};
  }
  .news-main {
    width: 60%;
  }
  h2 {
    ${tw`text-xl font-bold pb-4`}
  }
`;
