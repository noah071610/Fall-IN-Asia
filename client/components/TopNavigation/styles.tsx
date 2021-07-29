import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, XLG_SIZE } from "config";
import tw from "twin.macro";

export const TopNavigationWrapper = styled.nav`
  ${BORDER_THIN("border-bottom")};
  .nav-inner-list {
    ${tw` mx-auto`}
    width:100%;
    ${FLEX_STYLE("center", "center")};
    li {
      ${tw`p-4 cursor-pointer`}
    }
  }
`;
