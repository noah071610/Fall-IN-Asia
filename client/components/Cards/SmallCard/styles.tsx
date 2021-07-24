import styled from "@emotion/styled";
import { FLEX_STYLE, GRAY_COLOR, HOVER_GRAY } from "config";

export const SmallCardWrapper = styled.li`
  border-radius: 15px;
  padding: 0.5rem 0;
  cursor: pointer;
  margin: 0;
  ${FLEX_STYLE("center", "center")};
  img {
    border-radius: 5px;
    width: 4rem;
    height: 4rem;
  }
  .country-desc {
    font-size: 0.7rem;
    h4 {
      font-size: 1rem;
      padding-bottom: 0.3rem;
    }
    margin-left: 1rem;
  }
  &:hover {
    background: ${GRAY_COLOR};
  }
`;
