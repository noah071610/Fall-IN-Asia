import styled from "@emotion/styled";
import {
  BORDER_THIN,
  FLEX_STYLE,
  FONT_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  RGB_BLACK,
  WHITE_COLOR,
} from "config";

export const MainWrapper = styled.div`
  background-color: ${GRAY_COLOR};
  .layout {
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    .layout_main {
      margin-left: 2rem;
      width: 75%;
      .main-title {
        ${FONT_STYLE(1, true)}
        margin-top: 1.8rem;
        margin-bottom: 1rem;
      }
      .main-title:first-of-type {
        margin: 0;
      }
    }
  }
`;
