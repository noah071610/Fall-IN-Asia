import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRID_STYLE, WHITE_COLOR, WHITE_STYLE } from "config";

export const StoryCountryArticleListWrapper = styled.div`
  ${GRID_STYLE("1rem", "repeat(3,1fr)")};
  .country-image {
    position: relative;
    border-radius: 15px;
    width: 100%;
    cursor: pointer;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    ${FLEX_STYLE("center", "center")};
    .overlay {
      border-radius: 15px;
    }
    h3 {
      z-index: 1;
      ${FONT_STYLE(1.5, true, WHITE_COLOR)};
    }
    &:hover {
      .overlay {
        opacity: 0.3;
      }
    }
  }
`;
