import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, GRID_STYLE, HOVER_GRAY, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostInfoWrapper = styled.div`
  ${tw`w-2/3 mx-auto`}
  .country-image {
    ${tw`h-40 mb-4`}
    position: relative;
    border-radius: 15px;
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
`;
