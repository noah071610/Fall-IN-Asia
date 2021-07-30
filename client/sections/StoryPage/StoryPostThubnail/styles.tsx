import styled from "@emotion/styled";
import { BLACK_COLOR, BORDER_THIN, FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostThubnailWrapper = styled.div`
  ${FLEX_STYLE("center", "center", "column")};
  ${tw`mb-16`}
  .thumbnail {
    ${tw`mt-8 w-3/4`}
  }
  .story-title {
    ${FLEX_STYLE("center", "center", "column")};
    ${tw`my-8`}
    h1 {
      ${tw`mb-8 font-bold leading-10 text-center`}
    }
  }
`;
