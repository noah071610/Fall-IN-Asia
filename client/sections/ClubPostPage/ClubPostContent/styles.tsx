import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK, SKY_COLOR } from "config";

export const ClubPostContentWrapper = styled.div`
  padding: 2rem 2rem 0 2rem;

  p {
    font-size: 1rem;
    padding: 0 4rem 3rem 0;
    line-height: 2;
  }
  .like-section {
    padding: 1rem 0.2rem;
    border-top: 2px solid ${RGB_BLACK("0.1")};
    border-bottom: 2px solid ${RGB_BLACK("0.1")};
    ${FLEX_STYLE("center", "center")};
    .like-text {
      margin-right: 0.7rem;
    }
    .like-btn {
      font-size: 1rem;
      border: 1px solid ${RGB_BLACK("0.08")};
      ${FLEX_STYLE("center", "center")};
      padding: 0.5rem 1.5rem;
      &:first-of-type {
        margin-right: 0.8rem;
      }
    }

    .like-number {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
    .reverse {
      transform: rotate(180deg);
    }
  }
`;
