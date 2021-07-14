import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const CommentWrapper = styled.div`
  .comment-main {
    padding: 1rem 0.5rem;
    ${BORDER_THIN("border-bottom")};
    transition: 0.3s all;
    cursor: pointer;
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
        .color-red {
          &:hover {
            color: ${RED_COLOR};
          }
        }
      }
    }
    .comment-wrapper {
      padding-left: 0.2rem;
    }
  }

  &:hover {
    .comment-main {
      background: ${RGB_BLACK(0.03)};
    }
  }
`;
