import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RED_COLOR, RGB_BLACK } from "config";
import tw from "twin.macro";

export const CommentWrapper = styled.div`
  ${tw`py-4 mx-8`}
  .comment-main {
    ${tw`cursor-pointer pr-8 pl-2 relative`}
    transition: 0.3s all;
    .btn-wrapper {
      ${tw`absolute right-0 `}
      top:0.25rem;
      a {
        ${tw`rounded-full px-2 py-1 hover:bg-gray-100`}
      }
      .liked {
        .anticon {
          color: ${RED_COLOR};
        }
      }
    }
  }
  .more-subComment {
    padding: 1rem 0.5rem 0 3.7rem;
    ${FLEX_STYLE("flex-start", "center")};
    .count {
      ${tw`text-sm mr-1 font-bold `}
      color: ${BLUE_COLOR};
    }
    .more-subComment-btn {
      ${tw`cursor-pointer text-sm p-0`}
      .anticon {
        font-size: 0.9rem;
        margin-left: 0.5rem;
      }
    }
  }
`;
