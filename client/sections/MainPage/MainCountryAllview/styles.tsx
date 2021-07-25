import styled from "@emotion/styled";
import { FONT_STYLE, GRID_STYLE } from "config";
import tw from "twin.macro";

export const MainCountryAllviewWrapper = styled.div`
  ${tw`w-full rounded-2xl bg-white mt-4 p-4`}
  .country-card-wrapper {
    ${tw`flex flex-wrap`}
    img {
      ${tw`w-12 h-12`}
    }
  }
  h3 {
    ${FONT_STYLE(0.9, true)};
    margin-bottom: 1rem;
  }
`;
