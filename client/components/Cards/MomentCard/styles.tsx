import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RED_COLOR, SM_SIZE } from "config";
import tw from "twin.macro";

export const MomentCardWrapper = styled.article`
  ${tw`py-8 mx-6`}
  ${BORDER_THIN("border-bottom")};
  .article-header {
    a {
      transition: none;
      &:hover {
        ${tw`font-bold`}
        color: ${BLUE_COLOR};
      }
    }
  }
  .article-top {
    ${FLEX_STYLE("space-between", "flex-start")};
    ${tw`pb-4 pl-1`}
  }
  .article {
    .content {
      ${tw`cursor-pointer font-bold pl-1 pb-4 leading-7 hover:underline`}
    }
    .moment-image-wrapper {
      ${tw`cursor-pointer mb-4 flex`}
      .moment-image {
        ${tw`rounded-2xl w-36 h-36 mr-2`}
      }
      .moment-more-image {
        ${tw`w-36 h-36 bg-gray-300 rounded-2xl`}
        ${FLEX_STYLE("center", "center")};
        span {
          ${tw`text-white font-bold text-3xl`}
        }
      }
    }
  }
  .article-footer {
    li {
      ${tw`cursor-pointer p-1 text-xs`}
      .count {
        ${tw`mx-1`}
      }
      .anticon {
        font-size: 1rem;
      }
      &:hover {
        background: ${GRAY_COLOR};
        border-radius: 5px;
      }
    }
  }
  .liked {
    .anticon {
      color: ${RED_COLOR};
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`pt-4 pb-6 mx-4`}
    .article {
      .moment-image-wrapper {
        .moment-image {
          ${tw`rounded-xl w-24 h-24 mr-2`}
        }
        .moment-more-image {
          ${tw`w-24 h-24 rounded-xl`}
          span {
            ${tw`text-2xl`}
          }
        }
      }
    }
  }
`;
