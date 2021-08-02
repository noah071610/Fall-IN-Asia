import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, SKY_COLOR, XLG_SIZE } from "config";
import tw from "twin.macro";

export const TopNavigationWrapper = styled.nav`
  ${tw`sticky bg-white`}
  top:57px;
  z-index: 60;
  ${BORDER_THIN("border-bottom")};
  .nav-inner-list {
    ${tw` mx-auto`}
    width:100%;
    ${FLEX_STYLE("center", "center")};
    li {
      ${tw`p-4 cursor-pointer`}
    }
    .active-list {
      font-weight: bold;
      border-bottom: 0.25rem solid ${BLUE_COLOR};
      padding-bottom: 0.75rem;
    }
  }
`;
