import styled from "@emotion/styled";
import { BLACK_COLOR, FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  .vote-list {
    li {
      cursor: pointer;
      padding: 0.7rem 1.5rem;
      margin-right: 0.2rem;
      border: 1px solid ${RGB_BLACK("0.1")};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border-bottom: none;
      font-size: 0.75rem;
      transition: 0.3s all;
      a {
        color: ${BLACK_COLOR};
      }
      &:hover {
        background-color: ${RGB_BLACK("0.1")};
      }
    }
  }
  .vote-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    border: 1px solid ${RGB_BLACK("0.1")};
    padding: 2rem;
    .vote-poster {
      img {
        width: 100%;
        margin-bottom: 2rem;
      }
      h2 {
        font-weight: bold;
        text-align: center;
        padding: 1.5rem 0;
        border: 1px solid ${RGB_BLACK("0.1")};
      }
    }
    .vote-rader {
      width: 100%;
      height: 350px;
    }
    h3 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .vote-tag-list {
      ${FLEX_STYLE("center", "center")};
      flex-wrap: wrap;
    }
  }
`;
