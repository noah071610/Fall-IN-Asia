import styled from "@emotion/styled";
import { GRID_STYLE, RGB_BLACK } from "config";

export const GroupSelectModalWrapper = styled.div`
  padding: 1rem;
  ${GRID_STYLE("2rem", "2fr 2fr")};
  .group-recommeder {
    ${GRID_STYLE("0", "repeat(2,1fr)")};
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
      border-top: 2px solid ${RGB_BLACK("0.08")};
      border-bottom: 2px solid ${RGB_BLACK("0.08")};
      background-color: ${RGB_BLACK("0.03")};
    }
  }
`;
