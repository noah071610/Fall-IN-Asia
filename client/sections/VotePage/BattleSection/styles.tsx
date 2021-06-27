import styled from "@emotion/styled";
import { BLUE_COLOR, WHITE_COLOR } from "config";

export const Wrapper = styled.div`
  padding: 1rem;
  background-color: #f6d6d6;
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
      img {
        width: 50%;
      }
    }
  }
`;
