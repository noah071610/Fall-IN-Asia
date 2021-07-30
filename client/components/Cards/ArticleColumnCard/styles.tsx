import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, FONT_STYLE, GRAY_COLOR } from "config";
import tw from "twin.macro";

export const ArticleColumnCardWrapper = styled.div`
  ${tw`bg-white cursor-pointer py-4 rounded-xl`}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    ${tw`rounded-md mx-4 mb-4 overflow-hidden`}
    img {
      ${tw`rounded-md w-full`}
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
    ${FONT_STYLE(0.93, true)};
    ${ELLIPSIS_STYLE(1.5, 2, "auto")}
  }
`;
