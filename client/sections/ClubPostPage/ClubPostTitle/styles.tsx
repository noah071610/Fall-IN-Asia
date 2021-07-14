import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const ClubPostTitleWrapper = styled.div`
  padding: 2rem;
  ${FLEX_STYLE("space-between", "flex-end")};
  ${BORDER_THIN("border-bottom")};
  h1 {
    margin-bottom: 1rem;
  }
  .post-title-desc {
    ${FLEX_STYLE("space-between", "center")};
    .post-title-info {
      position: relative;
      ${FLEX_STYLE("flex-start", "center")};
      .edit-btn {
        .password-modal {
          right: 1.1rem;
        }
      }
      .delete-btn {
        .password-modal {
          right: -0.8rem;
        }
      }
    }
  }
  .right-menu {
    ${FLEX_STYLE("center", "flex-end")};
    .anticon {
      font-size: 2rem;
      color: ${RED_COLOR};
      cursor: pointer;
      transition: 0.3s all;
    }
    .like-btn {
      &:hover {
        -webkit-animation: heartBeat 1s;
        animation: heartBeat 1s;
      }
    }
    .like-number {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;
