import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, RGB_BLACK } from "config";

export const GruopPreviewWrapper = styled.div`
  ${BORDER_THIN("border")};
  padding: 1.5rem;
  cursor: pointer;
  &:hover {
    background: ${RGB_BLACK(0.03)};
  }
  h2 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${BLUE_COLOR};
    span {
      margin-right: 0.7rem;
    }
  }
  table {
    width: 100%;
    margin: 0.5rem 0;
    th {
      text-align: start;
      padding: 1rem 0;
    }
    td {
      padding: 1rem 0;
    }
    .table-header {
      ${BORDER_THIN("border-bottom")};
    }
  }
`;
