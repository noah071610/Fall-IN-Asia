import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, HOVER_GRAY, RED_COLOR } from "config";

export const StoryPostWrapper = styled.div`
  .story-content {
    padding: 4rem 0 6rem 0;
  }
  .story-footer {
    ${FLEX_STYLE("flex-start", "center")};
    ${FONT_STYLE(1.3, true)};
    margin: 2rem 2rem 0 2rem;
    li {
      ${HOVER_GRAY(15)};
      cursor: pointer;
      padding: 0.5rem;
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
