import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RGB_BLACK } from "config";

export const ClubPostTitleWrapper = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  div {
    ${FLEX_STYLE("space-between", "center")};
    ${BORDER_THIN("border-bottom")};
    padding-bottom: 1rem;
    .post-title-info {
      ${FLEX_STYLE("flex-start", "center")};
    }
    .post-title-menu {
      position: relative;
      a {
        font-size: 1.5rem;
        margin-left: 0.8rem;
      }
    }
  }
`;
