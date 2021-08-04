import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE } from "config";
import tw from "twin.macro";

export const MomentPostTitleWrapper = styled.div`
  ${tw`pb-4`}
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "flex-end")};
  .right-menu {
    ${FLEX_STYLE("center", "flex-end")};
    a {
      ${tw`p-1 rounded-full hover:bg-gray-100`}
      border-radius: 50%;
      .anticon {
        font-size: 1.1rem;
      }
    }
  }
`;
