import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

export const MainArticleListWrapper = styled.div`
  .content-wrapper {
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 15px;
    background-color: white;
    .content-filter {
      padding: 1rem 1rem 0 1rem;
      ${FLEX_STYLE("flex-end", "center")}
      button {
        ${FLEX_STYLE("center", "center")}
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;
