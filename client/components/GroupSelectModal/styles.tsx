import styled from "@emotion/styled";
import { BORDER_THICK, GRID_STYLE, RGB_BLACK } from "config";

export const GroupSelectModalWrapper = styled.div`
  padding: 1rem;
  ${GRID_STYLE("2rem", "2fr 2fr")};
  .group-recommeder {
    padding: 0.5rem;
    ${BORDER_THICK("border")};
    ${GRID_STYLE("0.5rem", "repeat(2,1fr)")};
  }
  .group-search {
    h3 {
      margin: 1rem 0;
    }
    h3:first-of-type {
      margin-top: 0;
    }
    ul {
      padding: 1rem;
      ${BORDER_THICK("border-top")};
      ${BORDER_THICK("border-bottom")};
      background-color: ${RGB_BLACK(0.03)};
    }
  }
`;
