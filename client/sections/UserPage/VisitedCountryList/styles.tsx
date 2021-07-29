import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const VisitedCountryListWrapper = styled.div`
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
