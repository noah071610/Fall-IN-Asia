import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THICK, BORDER_THIN, FLEX_STYLE, RGB_BLACK, SKY_COLOR } from "config";

export const ClubPostContentWrapper = styled.div`
  padding: 2rem 2rem 0 2rem;

  p {
    font-size: 1rem;
    padding: 0 5rem 3rem 0;
    line-height: 2;
  }
  .like-section {
    padding: 1rem 0.2rem;
    ${BORDER_THICK("border-bottom")};
    ${FLEX_STYLE("center", "center")};
    .like-btn {
      font-size: 1rem;
      ${BORDER_THIN("border")};
      ${FLEX_STYLE("center", "center")};
      padding: 0.5rem 3rem;
      transition: 0.3s all;
      &:first-of-type {
        margin-right: 0.8rem;
      }
      .like-number {
        font-size: 1.5rem;
        padding: 0.5rem 0.8rem;
      }
      &:hover {
        border: 1px solid ${BLUE_COLOR};
      }
    }
    .reverse {
      transform: rotate(180deg);
    }
  }
`;
