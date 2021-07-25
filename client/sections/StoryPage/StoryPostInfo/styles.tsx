import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, GRID_STYLE, HOVER_GRAY, WHITE_COLOR } from "config";

export const StoryPostInfoWrapper = styled.div`
  ${GRID_STYLE("2rem", "1fr 1fr")};
  .country-image {
    position: relative;
    border-radius: 15px;
    width: 100%;
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
        opacity: 0.5;
      }
    }
  }
  .info-stories {
    margin: 2rem 0;
    ${BORDER_THIN("border")};
    border-radius: 15px;
    overflow: hidden;
    li {
      display: flex;
      width: 100%;
      cursor: pointer;
      img {
        width: 20%;
        margin-right: 1rem;
      }
      padding: 1rem;
      p {
        ${FONT_STYLE(0.94, true)}
      }
      ${HOVER_GRAY()};
    }
  }
`;
