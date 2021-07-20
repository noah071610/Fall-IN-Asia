import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";

export const MainTopContentWrapper = styled.div`
  .more-card {
    cursor: pointer;
    height: 340px;
    ${FLEX_STYLE("center", "center")};
    div {
      ${FLEX_STYLE("center", "center")};
      flex-direction: column;
      color: ${RGB_BLACK(0.3)};
      .anticon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }
  .article-list-wrapper {
    padding: 0.5rem;
    border-radius: 15px;
    background-color: white;
    margin-top: 1rem;
    display: block;
  }
`;
