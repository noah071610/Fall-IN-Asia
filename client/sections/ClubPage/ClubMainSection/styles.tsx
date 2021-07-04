import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THICK, FLEX_STYLE, RGB_BLACK } from "config";

export const MainWrapper = styled.div`
  padding-bottom: 2rem;
  table {
    width: 100%;
    tr {
      display: grid;
      grid-template-columns: 1fr 5fr 2fr 2fr 1fr;
    }
    .table-header {
      padding: 1rem 0;
      border-top: 3px solid ${BLUE_COLOR};
      ${BORDER_THICK("border-bottom")};
    }
    .table-post {
      padding: 1rem 0;
      text-align: center;
      transition: 0.2s all;
      .title {
        cursor: pointer;
      }
      &:hover {
        background: ${RGB_BLACK(0.1)};
        .title {
          text-decoration: underline;
        }
      }
    }
  }
`;
