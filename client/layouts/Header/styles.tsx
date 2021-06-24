import styled from "@emotion/styled";
import { BLACK_COLOR, RGB_BLACK } from "config";

export const HeaderWrapper = styled.div`
  nav {
    margin-top: 1.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    li {
      border-right: 1.5px solid ${RGB_BLACK("0.07")};
      transition: 0.5s all;
      &:hover {
        .anticon {
          transform: scale(1.15);
        }
      }
      a {
        padding: 0.75rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${BLACK_COLOR};
        .anticon {
          transition: 0.5s all;
          font-size: 1.5rem;
        }
      }
      .list-text {
        margin-left: 0.7rem;
        font-size: 0.75rem;
      }
    }
    li:last-child {
      border-right: none;
    }
  }
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 2rem;
  }
`;
