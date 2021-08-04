import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";

export const CommentFormWrapper = styled.div`
  ${tw`py-4`}
  .comment-form-main {
    ${tw`rounded-2xl bg-gray-100 p-2`}
    transition:0.25s all;
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
