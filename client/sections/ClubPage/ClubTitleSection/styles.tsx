import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";
export const TitleWrapper = styled.div`
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
    margin: 0 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border-top: 2px solid ${RGB_BLACK("0.1")};
    border-bottom: 2px solid ${RGB_BLACK("0.1")};
    background-color: ${RGB_BLACK("0.03")};
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
