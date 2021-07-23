import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

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
`;
