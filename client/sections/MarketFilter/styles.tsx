import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE } from "config";

export const FilterWrapper = styled.div`
  margin-top: 3rem;
  ${FLEX_STYLE("flex-end", "flex-end")};
  flex-direction: column;
  .ant-input-search {
    width: 50%;
    margin-bottom: 1rem;
  }
  .ant-select {
    margin-left: 0.5rem;
  }
`;
