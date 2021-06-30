import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, DEEP_BLUE_COLOR, FLEX_STYLE } from "config";

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  ${FLEX_STYLE("space-between", "center")};
  width: 100%;
  ${BORDER_THIN("border")};
  background-color: #f6d6d6;
  img {
    width: 50%;
  }
  div {
    margin: 0 2rem 0 0;
    h2 {
      color: ${DEEP_BLUE_COLOR};
      margin-bottom: 1.5rem;
    }
    h4 {
      color: ${DEEP_BLUE_COLOR};
      margin-bottom: 1rem;
    }
    span {
      font-size: 3rem;
      font-weight: bold;
      margin-right: 0.5rem;
      display: inline-block;
      user-select: none;
      &:hover {
        animation: rubberBand 0.7s;
      }
    }
  }
`;
