import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const CommunityMenuWrapper = styled.ul`
  position: absolute;
  transition: 0.3s all;
  width: 100%;
  top: 130%;
  left: -0.5rem;
  background-color: ${WHITE_COLOR};
  border: 1.5px solid ${RGB_BLACK("0.2")};
  box-sizing: content-box;
  padding: 0.5rem;
  li {
    ${FLEX_STYLE("center", "center")};
    padding: 1rem;
    &:hover {
      color: blue;
    }
  }
`;

export const MenuTail = styled.div`
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 1;
  width: 9px;
  height: 9px;
  background-color: ${WHITE_COLOR};
  border: 1.5px solid ${RGB_BLACK("0.2")};
  border-bottom: none;
  border-right: none;
  content: "";
  top: -6px;
  right: calc(50% - 9px);
`;
