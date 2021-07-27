import styled from "@emotion/styled";
import { ELLIPSIS_STYLE, FLEX_STYLE, FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const StoryTopArticleListWrapper = styled.div`
  ${GRID_STYLE("1rem", "1.5fr 2fr")};
  height: 450px;
  .top-story-list {
    li {
      ${tw`flex w-full cursor-pointer p-4 hover:bg-gray-100`}
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      .image-wrapper {
        ${tw`overflow-hidden mr-4 rounded-md`}
        img {
          transition: 0.3s all;
          ${tw`w-20 h-16 rounded-md`}
        }
      }
      h4 {
        margin-bottom: 0.5rem;
      }
      p {
        ${ELLIPSIS_STYLE(1.3, 2, "40px")};
        ${FONT_STYLE(0.94, true)}
      }
    }
  }
`;
