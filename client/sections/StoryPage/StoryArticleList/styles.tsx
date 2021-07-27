import styled from "@emotion/styled";
import { FLEX_STYLE, GRID_STYLE } from "config";

export const StoryArticleListWrapper = styled.div`
  .content-filter {
    padding: 1rem;
    ${FLEX_STYLE("flex-end", "center")}
    button {
      ${FLEX_STYLE("center", "center")}
      &:hover {
        font-weight: bold;
      }
    }
  }
  .content-list-wrapper {
    ${GRID_STYLE("1rem", "repeat(3,1fr)")};
  }
`;
