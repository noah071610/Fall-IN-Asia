import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, GRAY_COLOR, SM_SIZE } from "config";
import tw from "twin.macro";

export const ArticleColumnCardWrapper = styled.div`
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
    ${tw`mb-4 overflow-hidden`}
    img {
      ${tw`w-full`}
      height:180px;
      transition: 0.3s all;
    }
  }
  .box-card-info {
    padding: 0 1rem;
    ${FLEX_STYLE("space-between", "center")};
    .box-card-list {
      li {
        padding: 0.3rem;
        cursor: pointer;
        .count {
          margin: 0 0.3rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
        &:hover {
          background: ${GRAY_COLOR};
          border-radius: 5px;
        }
      }
    }
  }
  p {
    ${tw`m-4 mb-0 overflow-hidden`};
    ${tw`text-sm font-bold`}
    ${ELLIPSIS_STYLE(1.7, 2, "46px")}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`pb-6 mb-4`}
    p {
      ${ELLIPSIS_STYLE(1.7, 2, "auto")}
    }
  }
`;
