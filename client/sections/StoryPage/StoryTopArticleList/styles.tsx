import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const StoryTopArticleListWrapper = styled.div`
  .popular-story-list {
    ${GRID_STYLE("1rem", "repeat(5,1fr)")};
  }
`;
