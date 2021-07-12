import styled from "@emotion/styled";
import { BLACK_COLOR, BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const GroupVoteWrapper = styled.div`
  .vote-list {
    li {
      cursor: pointer;
      padding: 0.7rem 1.5rem;
      margin-right: 0.2rem;
      ${BORDER_THIN("border")};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border-bottom: none;
      font-size: 0.75rem;
      transition: 0.3s all;
      a {
        color: ${BLACK_COLOR};
      }
      &:hover {
        background-color: ${RGB_BLACK(0.1)};
      }
    }
  }
  .vote-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    ${BORDER_THIN("border")};
    padding: 2rem;
    .vote-poster {
      img {
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 1px 1px 8px ${RGB_BLACK(0.15)};
      }
      div {
        padding-top: 0.7rem;
        ${BORDER_THIN("border-top")};
        ${FLEX_STYLE("space-between", "flex-end")};
        h2 {
          margin-right: 1rem;
          span {
            color: ${BLUE_COLOR};
            font-size: 2rem;
            font-weight: bold;
            margin-right: 0.15rem;
          }
        }
        button {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
        }
      }
    }
    .vote-rader {
      width: 100%;
      height: 350px;
    }
    h3 {
      text-align: center;
      margin-bottom: 1rem;
    }
    .vote-tag-list {
      ${FLEX_STYLE("center", "center")};
      flex-wrap: wrap;
      button {
        margin: 0 0.5rem 0.7rem 0;
      }
    }
  }
`;
