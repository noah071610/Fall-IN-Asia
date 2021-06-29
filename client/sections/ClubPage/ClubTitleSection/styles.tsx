import styled from "@emotion/styled";
import { BORDER_THICK, FLEX_STYLE, RGB_BLACK } from "config";
export const TitleWrapper = styled.div`
  padding: 0 2rem 3rem 2rem;
  .club-title {
    padding: 2rem 0 2rem 3rem;
    h2 {
      display: inline-block;
    }
    a {
      margin-left: 2rem;
      .anticon {
        font-size: 1.3rem;
      }
    }
  }
  .club-list {
    padding: 1rem;
    ${BORDER_THICK("border-bottom")};
    background-color: ${RGB_BLACK(0.03)};
    span {
      margin-right: 1rem;
    }
    ul {
      display: inline-block;
      .tag {
        margin: 0;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const ClubSelectModal = styled.div`
  padding: 2rem;
`;
