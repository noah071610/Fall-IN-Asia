import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, SKY_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostAsideWrapper = styled.aside`
  ${tw`mt-4`}
  .aside-story-title {
    ${tw`mb-4 text-lg font-bold cursor-pointer`}
  }
  .aside-quick-viewer {
    ${tw`p-2 rounded-xl  sticky top-16`}
  }
  .aside-header-list {
    ${tw`block pb-4`}
    h1,h2,h3 {
      border-left: 2px solid ${GRAY_COLOR};
    }
    h1 {
      ${tw`py-3 pl-4`}
      font-size: 0.9rem;
      font-weight: bold;
    }
    h2,
    h3 {
      ${tw`text-sm pb-2 pl-8`}
    }
  }
  .is-current {
    h1,
    h2,
    h3 {
      border-left: 2px solid ${BLUE_COLOR};
    }
  }
`;
