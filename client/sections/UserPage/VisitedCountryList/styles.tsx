import styled from "@emotion/styled";
import { BORDER_THIN } from "config";
import tw from "twin.macro";

export const VisitedCountryListWrapper = styled.ul`
  ${tw`p-4`}
  li {
    ${tw`mr-4`}
    .image-wrapper {
      ${tw`w-6 h-4 inline-block`}
      img {
        ${tw`w-full h-full `}
        ${BORDER_THIN("border")};
      }
    }
    span {
      ${tw`ml-2`}
    }
  }
`;
