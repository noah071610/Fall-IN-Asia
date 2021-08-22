import styled from "@emotion/styled";
import tw from "twin.macro";

export const SubCommentWrapper = styled.div`
  padding: 1rem 2rem 0 3.7rem;
  position: relative;
  .delete-btn {
    ${tw`absolute top-2 right-0 py-1 px-2 rounded-full hover:bg-gray-100`}
  }
  .icon {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
