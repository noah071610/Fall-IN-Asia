import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, HOVER_GRAY, RGB_BLACK, WHITE_STYLE } from "config";

export const MainPostingFormWrapper = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 0.4rem;
  width: 100%;
  .type-selector {
    ${FLEX_STYLE("flex-end", "center")};
    margin-bottom: 1rem;
  }
  .ant-select-selector {
    border-radius: 10px !important;
    &:focus {
      border: 1px solid ${RGB_BLACK(0.08)} !important;
      box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
    }
    &:hover {
      border: 1px solid ${RGB_BLACK(0.08)} !important;
      box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
    }
  }
  .posting-form-preview {
    transition: 0.3s all;
    border-radius: 15px;
    cursor: pointer;
    ${FLEX_STYLE("space-between", "center")}
    padding: 0.4rem 1rem;
    .anticon {
      transition: 0.3s all;
      font-size: 1.4rem;
      padding: 0.5rem;
    }
    &:hover {
      background: ${GRAY_COLOR};
      .anticon {
        transform: scale(1.15);
      }
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
