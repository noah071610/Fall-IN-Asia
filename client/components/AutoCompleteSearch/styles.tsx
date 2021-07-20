import styled from "@emotion/styled";
import { FLEX_STYLE, GRAY_COLOR, HOVER_GRAY } from "config";

export const AutoCompleteSearchWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  padding: 0.5rem;
  .searchForm-before {
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
  input {
    padding: 0.4rem 1rem;
    border-radius: 15px;
    display: block;
    width: 100%;
    height: 3rem;
  }
  .autosearch-list {
    padding: 0.5rem 1rem;
    background: white;
    ${HOVER_GRAY(10)};
  }
`;
