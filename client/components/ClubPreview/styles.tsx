import styled from "@emotion/styled";
import { BLACK_COLOR, BLUE_COLOR, BORDER_THIN, GRID_STYLE, RGB_BLACK } from "config";

export const ClubPreviewWrapper = styled.div`
  ${BORDER_THIN("border")};
  padding: 1.5rem;
  h2 {
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-bottom: 1px solid ${BLUE_COLOR};
    cursor: pointer;
    span {
      margin-right: 0.7rem;
    }
  }
  table {
    width: 100%;
    margin: 0.5rem 0;
    th {
      text-align: start;
      padding: 1rem 0.5rem;
    }
    th:first-of-type {
      width: 70%;
    }
    td {
      padding: 1rem 0.5rem;
    }
    .table-header {
      ${BORDER_THIN("border-bottom")};
    }
    .table-row {
      cursor: pointer;
      &:hover {
        background: ${RGB_BLACK(0.03)};
      }
      .row-title {
        a {
          color: ${BLACK_COLOR};
          display: block;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
