import styled from "@emotion/styled";
import { FLEX_STYLE, RED_COLOR, RGB_BLACK, WHITE_COLOR } from "config";

export const Wrapper = styled.div`
  height: 500px;
  margin: 1rem 2rem;
  background: url(https://images.unsplash.com/photo-1603292498182-95edce1e705b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
    center no-repeat fixed;
  background-size: 100% 100%;
  ${FLEX_STYLE("center", "center")};
  flex-direction: column;
  position: relative;
  cursor: pointer;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    transition: 0.3s all;
  }
  h1 {
    font-size: 2.5rem;
    color: ${WHITE_COLOR};
    text-align: center;
    z-index: 1;
    span {
      font-size: 4rem;
      color: ${RED_COLOR};
    }
  }
  h3 {
    color: ${WHITE_COLOR};
    z-index: 1;
  }
  img {
    width: 100%;
  }
  &:hover {
    .overlay {
      background-color: ${RGB_BLACK(0.4)};
    }
  }
`;
