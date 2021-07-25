import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const StoryPostThubnailWrapper = styled.div`
  ${FLEX_STYLE("center", "center")};
  height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .story-title {
    ${tw`relative w-full py-20 mb-40 rounded-2xl`}
    ${FLEX_STYLE("center", "center", "column")};
    backgroud: rgba(255, 255, 255, 0.5);
    .overlay {
      ${tw`w-full bg-white opacity-30`}
    }
    .name-space-wrapper {
      z-index: 1;
    }
    .user-info,
    .date {
      color: ${WHITE_COLOR};
    }
    h1 {
      ${FONT_STYLE(2, true, WHITE_COLOR)};
      z-index: 1;
      margin-bottom: 2rem;
    }
  }
  .scroll-down-btn {
    ${tw`cursor-pointer w-full absolute h-60 left-0 bottom-0`}
    ${FLEX_STYLE("center", "flex-start")};
    a {
      animation: fadeOutDown 2.7s infinite;
      .anticon {
        ${tw`text-white text-8xl opacity-50`}
      }
    }
  }
`;
