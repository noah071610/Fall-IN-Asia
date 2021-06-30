import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RGB_BLACK } from "config";

export const CommentWrapper = styled.div`
  padding: 1rem 0.7rem;
  ${BORDER_THIN("border-bottom")};
  transition: 0.3s all;
  cursor: pointer;
  .name-space {
    ${FLEX_STYLE("space-between", "center")};
    margin-bottom: 0.5rem;
    .icon {
      img {
        width: 2rem;
      }
      margin-right: 0.7rem;
    }
    .name {
      margin-right: 1rem;
    }
    .comment-menu {
      font-size: 0.9rem;
      a {
        margin-left: 0.5rem;
      }
    }
  }
  .comment-wrapper {
    padding-left: 0.2rem;
  }
  &:hover {
    background: ${RGB_BLACK(0.03)};
  }
`;
