import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, FONT_STYLE, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const HeaderWrapper = styled.header`
  ${tw`py-3 px-5 w-full bg-white`}
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "center")};
  a {
    ${FONT_STYLE(1.05, true)};
  }
`;

export const HeaderLeft = styled.ul`
  img {
    width: 8.5rem;
    height: 2.5rem;
    margin-right: 2rem;
  }
  li {
    ${tw`mr-6`}
    .icon {
      ${tw`w-10 h-10 rounded-full`}
    }
  }
`;

export const HeaderRight = styled.ul`
  ${FLEX_STYLE("", "center")};
  li {
    ${tw`ml-3`}
    padding: 0.5rem 0.6rem;
    .user-icon {
      ${tw`w-10 h-10 rounded-full`}
    }
    .anticon {
      ${tw`text-2xl`}
    }
  }
  .icon-li {
    ${tw`rounded-full hover:bg-gray-100`}
  }
`;
