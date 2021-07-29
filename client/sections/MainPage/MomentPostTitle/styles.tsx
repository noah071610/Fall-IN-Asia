import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR } from "config";

export const MomentPostTitleWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 2rem;
  ${BORDER_THIN("border-bottom")};
  ${FLEX_STYLE("space-between", "flex-end")};
  .right-menu {
    ${FLEX_STYLE("center", "flex-end")};
    a {
      padding: 0.3rem;
      border-radius: 50%;
      .anticon {
        font-size: 1.1rem;
      }
      &:hover {
        background: ${GRAY_COLOR};
      }
    }
  }
`;
