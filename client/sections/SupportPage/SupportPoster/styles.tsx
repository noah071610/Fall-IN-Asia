import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  ${FLEX_STYLE("space-between", "center")};
  width: 100%;
  background-color: #f6d6d6;
  img {
    width: 50%;
  }
  div {
    margin: 0 2rem 0 0;
    h2 {
      color: #6a7ba2;
      margin-bottom: 1.5rem;
    }
    h4 {
      color: #6a7ba2;
      margin-bottom: 1rem;
    }
    span {
      font-size: 3rem;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;
