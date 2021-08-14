import styled from "@emotion/styled";
import { FLEX_STYLE, RED_COLOR } from "config";
import tw from "twin.macro";

export const PostCommentWrapper = styled.section`
  position: relative;
  .comment-header {
    ${tw`mt-12`}
    ${FLEX_STYLE("flex-start", "center")};
    ${tw`text-xl font-bold`}
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
