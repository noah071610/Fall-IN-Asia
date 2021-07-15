import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const CommentWrapper = styled.div`
  padding-bottom: 2rem;
  .comment-main {
    padding: 1rem 0.5rem;
    transition: 0.3s all;
    .name-space {
      ${FLEX_STYLE("space-between", "center")};
      margin-bottom: 0.5rem;
      .icon {
        img {
          width: 2rem;
          border-radius: 50%;
        }
        margin-right: 0.7rem;
      }
      .name {
        margin-right: 1rem;
      }
      .comment-menu {
        position: relative;
        font-size: 0.9rem;
        .password-modal {
          right: -0.8rem;
        }
        a {
          margin-left: 0.5rem;
        }
        .anticon {
          font-size: 1.1rem;
        }
      }
    }
    .comment-wrapper {
      padding-left: 0.2rem;
    }
  }
  .subComment-toggle-div {
    padding: 0 0.5rem;
    ${FLEX_STYLE("flex-end", "center")};
    .count {
      font-size: 1rem;
      margin-right: 0.2rem;
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
    a {
      ${FLEX_STYLE("center", "center")};
      .anticon {
        font-size: 1.1rem;
        margin-left: 0.5rem;
      }
    }
  }
  .comment-bottom {
    ${BORDER_THIN("border-bottom")};
    padding-bottom: 1rem;
  }
`;
