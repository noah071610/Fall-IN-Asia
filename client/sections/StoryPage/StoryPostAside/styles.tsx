import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, SKY_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostAsideWrapper = styled.aside`
  ${tw`mt-4`}
  .aside-story-title {
    ${tw`mb-4 text-lg font-bold`}
  }
  .aside-quick-viewer {
    ${tw`p-2 rounded-xl  sticky top-16`}
  }
  .ant-timeline-item {
    ${tw`pb-4`}
    h1 {
      font-size: 0.9rem;
      font-weight: bold;
    }
    h2,
    h3 {
      ${tw`text-sm`}
      padding-left: 1rem;
    }
    ${tw`block`}
  }
  .is-current {
    .ant-timeline-item-head {
      background: ${SKY_COLOR};
    }
  }
`;
