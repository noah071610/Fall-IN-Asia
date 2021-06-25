import styled from "@emotion/styled";
import { BLACK_COLOR, FLEX_STYLE, LG_SIZE, RGB_BLACK } from "config";

export const HeaderWrapper = styled.div`
  padding: 1.3rem 0.7rem 0.7rem 0.7rem;
  border-bottom: 1px solid ${RGB_BLACK("0.07")};
  .header-lgsize {
    width: ${LG_SIZE};
    margin: 0 auto;
    ${FLEX_STYLE("space-between", "center")};
    nav {
      ${FLEX_STYLE("center", "center")};
      .nav-list {
        transition: 0.5s all;
        position: relative;
        &:hover {
          .anticon {
            transform: scale(1.15);
          }
        }
        &-ancher {
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${BLACK_COLOR};
          .anticon {
            transition: 0.5s all;
            font-size: 1.5rem;
          }
          .arrow {
            margin-left: 0.5rem;
            transition: 0.3s all;
          }
        }
        .list-text {
          margin-left: 0.7rem;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export const Poster = styled.div`
  img {
    width: 10rem;
  }
`;
