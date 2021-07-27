import styled from "@emotion/styled";
import { BLACK_COLOR, FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostThubnailWrapper = styled.div`
  ${FLEX_STYLE("center", "center", "column")};
  margin-bottom: 2rem;
  .thumbnail {
    margin-top: 2rem;
    width: 70%;
  }
  .story-title {
    margin: 2rem 0;
    h1 {
      margin-bottom: 1rem;
    }
  }
`;
