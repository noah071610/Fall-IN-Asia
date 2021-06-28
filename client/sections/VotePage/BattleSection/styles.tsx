import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, PINK_COLOR, SKY_COLOR, WHITE_COLOR } from "config";

export const Wrapper = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${PINK_COLOR};
  h1 {
    text-align: center;
    margin: 2rem;
    font-size: 2rem;
    font-weight: bold;
    span {
      font-size: 3rem;
      color: ${BLUE_COLOR};
      margin-right: 0.8rem;
    }
    line-height: 1.5;
  }
  .battle {
    &-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 1rem;
      div {
        border: 5px solid ${WHITE_COLOR};
        border-radius: 10px;
        img {
          width: 100%;
          height: 250px;
          border-radius: 10px;
        }
      }
    }
    &-vote {
      padding-top: 1rem;
      display: flex;
      img {
        width: 40%;
      }
      div {
        width: 60%;
        ${FLEX_STYLE("center", "center")};
        flex-direction: column;
        h2 {
          font-weight: bold;
        }
        button {
          padding: 1rem 3rem;
          margin-top: 1.5rem;
          background-color: ${SKY_COLOR};
          font-size: 1.1rem;
          color: ${WHITE_COLOR};
          border-radius: 5px;
          border: 3px solid ${WHITE_COLOR};
          transition: 0.3s all;
          &:hover {
            background-color: ${BLUE_COLOR};
          }
        }
      }
    }
  }
`;
