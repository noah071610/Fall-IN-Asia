import styled from "@emotion/styled";
import { FONT_STYLE } from "config";
import tw from "twin.macro";

export const MainCountryAllviewWrapper = styled.div`
  ${tw`w-full rounded-2xl bg-white `}
  .country-card-wrapper {
    ${tw`flex flex-wrap`}
    img {
      ${tw`w-12 h-12`}
    }
  }
  h3 {
    ${FONT_STYLE(0.9, true)};
    ${tw`mb-4 mt-6`}
  }
  h3:first-of-type {
    ${tw`mt-0`}
  }
`;
