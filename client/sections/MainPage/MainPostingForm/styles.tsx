import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, HOVER_GRAY, RGB_BLACK } from "config";

export const MainPostingFormWrapper = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 0.4rem;
  width: 100%;
  transition: 0.3s all;
  .search {
    border-radius: 15px;
    cursor: pointer;
    ${FLEX_STYLE("space-between", "center")}
    padding: 0.4rem 1rem;
    .anticon {
      font-size: 1.4rem;
      border-radius: 15px;
      padding: 0.5rem;
      background: ${GRAY_COLOR};
    }
    &:hover {
      background: ${GRAY_COLOR};
    }
  }
  .title-wrapper {
    margin: 1rem;
    border-radius: 15px;
    ${BORDER_THIN("border")};
    input {
      padding: 0.7rem 1rem;
      border-radius: 15px;
    }
  }
  .posting-editor {
    padding: 1rem;
    .editor-btn-wrapper {
      margin-top: 1rem;
      ${FLEX_STYLE("flex-end", "center")}
      button {
        padding: 0.7rem 1.3rem;
        font-weight: bold;
        ${HOVER_GRAY(10)};
      }
    }
  }
`;
