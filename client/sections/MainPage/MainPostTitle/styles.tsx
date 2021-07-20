import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const MainPostTitleWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 2rem;
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "flex-end")};
  .right-menu {
    ${FLEX_STYLE("center", "flex-end")};
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
