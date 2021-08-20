import styled from "@emotion/styled";
import tw from "twin.macro";

export const UserFollowWrapper = styled.div`
  .follow-wrapper {
    ${tw`mb-4`}
    .follow-icon-wrapper {
      ${tw`mb-2 mt-3`}
      img {
        ${tw`w-6 h-6 rounded-full border-solid border border-gray-100 mr-2`}
      }
    }
    span {
      ${tw`leading-5`}
    }
  }
`;
