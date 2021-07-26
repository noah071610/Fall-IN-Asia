import styled from "@emotion/styled";
import { FONT_STYLE } from "config";
import tw from "twin.macro";

export const MainAsideWrapper = styled.aside`
  width: 22%;
  .aside-title {
    ${FONT_STYLE(0.9, true)}
    ${tw`mt-8 mb-4`}
  }
  .aside-title:first-of-type {
    ${tw`mt-0 mb-4`}
  }
  ${tw`bg-white rounded-2xl h-full p-4 `}
`;
