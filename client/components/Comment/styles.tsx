import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const CommentWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 2rem;
  .comment-main {
    cursor: pointer;
    padding: 0 2rem 0 0.5rem;
    transition: 0.3s all;
    position: relative;
    .more-btn {
      position: absolute;
      top: 0;
      right: 0.5rem;
    }
  }
  .subComment-toggle-div {
    padding: 0.5rem 0.5rem 0.5rem 3.3rem;
    cursor: pointer;
    ${FLEX_STYLE("flex-start", "center")};
    .count {
      font-size: 0.8rem;
      margin-right: 0.2rem;
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
    span {
      ${FLEX_STYLE("center", "center")};
      font-size: 0.8rem;
      .anticon {
        font-size: 1rem;
        margin-left: 0.5rem;
      }
    }
  }
`;
