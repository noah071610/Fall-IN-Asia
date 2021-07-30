import styled from "@emotion/styled";
import { BORDER_THIN } from "config";
import tw from "twin.macro";

export const ListCardWrapper = styled.div`
  ${tw`flex w-full px-2 py-3 cursor-pointer mb-1 rounded-md overflow-hidden`}
  ${BORDER_THIN("border")};
  &:hover {
    ${tw`shadow-md`}
  }
  img {
    ${tw`w-28 h-20 mr-4 rounded-md`}
  }
  .list-card-desc {
    h4 {
      ${tw`mb-2 text-xs`}
    }
    p {
      ${tw`font-bold`}
    }
  }
`;
