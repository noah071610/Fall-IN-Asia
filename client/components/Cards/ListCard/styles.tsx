import styled from "@emotion/styled";
import tw from "twin.macro";

export const ListCardWrapper = styled.li`
  ${tw`w-full p-4 cursor-pointer mb-2 shadow-md`}
  transition:0.3s all;
  &:hover {
    ${tw`shadow-lg`}
  }
  h4 {
    ${tw`mb-2 text-xs`}
  }
  p {
    ${tw`font-bold leading-6`}
  }
`;
