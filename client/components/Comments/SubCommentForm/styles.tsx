import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";

export const SubCommentFormWrapper = styled.div`
  padding: 1rem 0 0 3.7rem;
  transition: 0.3s all;
  ${FLEX_STYLE("flex-start", "center")};
  .icon {
    img {
      ${tw`w-8 rounded-full mr-2`}
    }
  }
  button {
    ${tw`w-24 py-2 px-3 bg-gray-100 rounded-md ml-2 hover:bg-gray-300`}
  }
`;
