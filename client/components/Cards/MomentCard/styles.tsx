import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RED_COLOR } from "config";
import tw from "twin.macro";

export const MomentCardWrapper = styled.div`
  ${tw`py-8 mx-6`}
  ${BORDER_THIN("border-bottom")};
  .article-header {
    a {
      &:hover {
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
    .one-image {
      cursor: pointer;
      padding-bottom: 1rem;
      img {
        border-radius: 15px;
        width: 50%;
        height: 300px;
      }
    }
    .two-images {
      cursor: pointer;
      ${FLEX_STYLE("flex-start", "center")};
      padding-bottom: 1rem;
      img {
        border-radius: 15px;
        width: 50%;
        height: 300px;
        margin-right: 0.2rem;
      }
      img:first-of-type {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      img:last-of-type {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
  .article-footer {
    li {
      ${tw`cursor-pointer p-1`}
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
`;
