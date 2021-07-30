import styled from "@emotion/styled";
import { FLEX_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";

export const SearchPagePosterWrapper = styled.div`
  ${tw`w-full h-60`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 250%;
  .poster-inner {
    ${tw`h-full mx-auto`}
    width: ${XLG_SIZE};
    ${FLEX_STYLE("center", "flex-start", "column")};
    h1 {
      ${tw`text-white font-bold mb-4`}
    }
    button {
      ${tw`bg-white py-2 px-4 rounded-md`}
    }
  }
`;
