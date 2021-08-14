import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, GRAY_COLOR, SM_SIZE } from "config";
import tw from "twin.macro";

export const ArticleColumnCardWrapper = styled.article`
  ${tw`bg-white cursor-pointer pb-8 shadow-md`}
  transition:0.3s all;
  &:hover {
    ${tw`shadow-lg`}
    .image-wrapper {
      img {
        transform: scale(1.15);
      }
    }
  }
  .image-wrapper {
    ${tw`mb-4 overflow-hidden relative`}
    img {
      ${tw`w-full`}
      height:180px;
      transition: 0.3s all;
    }
    .like-comment {
      ${tw`absolute bottom-2 right-2 bg-white py-1 px-2 opacity-50 rounded-xl`}
      li {
        ${tw`p-1 cursor-pointer`}
        .count {
          margin: 0 0.15rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
      }
    }
  }
  .box-card-info {
    padding: 0 1rem;
  }
  p {
    ${tw`m-4 mb-0 overflow-hidden`};
    ${tw`text-sm font-bold`}
    ${ELLIPSIS_STYLE(1.7, 2, "46px")}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`pb-6 mb-3`}
    p {
      ${ELLIPSIS_STYLE(1.7, 2, "auto")}
    }
  }
`;
