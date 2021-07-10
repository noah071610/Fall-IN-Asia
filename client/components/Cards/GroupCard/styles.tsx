import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const wrapperCSS = (src: string) => css`
  background: url(${src});
  background-size: 100% 100%;
  padding: 1rem;
  height: 200px;
  position: relative;
  cursor: pointer;
  &:hover {
    .mask {
      background: ${RGB_BLACK(0.4)};
    }
  }
  .mask {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(0, 0, 0, 0.5) 100%
    );
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
  }
  ${FLEX_STYLE("flex-start", "flex-end")};
  h2 {
    z-index: 1;
    color: ${WHITE_COLOR};
  }
`;
