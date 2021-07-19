import styled from "@emotion/styled";
import { BLACK_COLOR, BORDER_THIN, FLEX_STYLE, LG_SIZE, RGB_BLACK, WHITE_COLOR } from "config";

export const HeaderWrapper = styled.header`
  padding: 0.5rem 0;
  ${BORDER_THIN("border-bottom")};
  width: 100%;
  ${FLEX_STYLE("space-between", "center")};
  background-color: ${WHITE_COLOR};
`;

export const HeaderLeft = styled.ul`
  padding-left: 1rem;
  cursor: pointer;
  img {
    width: 8.5rem;
    height: 2.5rem;
  }
`;

export const HeaderRight = styled.ul``;
