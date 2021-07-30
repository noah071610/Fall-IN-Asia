import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, RED_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostWrapper = styled.div`
  ${tw`pb-16`}
  ${BORDER_THIN("border-bottom")};
  .story-footer {
    ${tw`mx-8 mt-12`}
    ${FLEX_STYLE("flex-start", "center")};
    ${FONT_STYLE(1.3, true)};
    li {
      ${tw`p-2 cursor-pointer hover:bg-gray-100 rounded-xl`}
      .anticon,
      .count {
        margin-right: 0.5rem;
      }
    }
    .liked {
      .anticon {
        color: ${RED_COLOR};
      }
    }
  }
`;
