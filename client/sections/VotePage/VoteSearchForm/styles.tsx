import styled from "@emotion/styled";
import { WHITE_COLOR } from "config";

export const VoteSearchWrapper = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  .slick-slider {
    margin-top: 1rem;
    .left-arrow {
      display: block;
      z-index: 1;
      top: 50%;
      position: absolute;
      font-size: 2rem;
      transform: translateY(-50%);
      color: ${WHITE_COLOR};
      cursor: pointer;
    }
    .right-arrow {
      display: block;
      z-index: 1;
      top: 50%;
      right: 0;
      position: absolute;
      font-size: 2rem;
      transform: translateY(-50%);
      color: ${WHITE_COLOR};
      cursor: pointer;
    }
  }
`;
