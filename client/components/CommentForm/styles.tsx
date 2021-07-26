import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, HOVER_GRAY, RGB_BLACK } from "config";
import tw from "twin.macro";

export const CommentFormWrapper = styled.div`
  ${tw`py-4 px-8`}
  .comment-form-main {
    ${tw`rounded-2xl bg-gray-100`}
    transition:0.25s all;
    padding: 0.3rem 0.5rem;
  }
  .comment-input {
    display: flex;
    .icon {
      margin-right: 0.7rem;
      img {
        ${tw`w-10 h-10 rounded-full`}
      }
    }
    textarea {
      cursor: pointer;
      &:focus {
        cursor: inherit;
      }
    }
  }
  .comment-submit-wrapper {
    overflow: hidden;
    div {
      ${FLEX_STYLE("flex-end", "center")};
      button {
        ${tw`rounded-md py-2 px-3 hover:bg-gray-100`}
      }
    }
  }
`;
