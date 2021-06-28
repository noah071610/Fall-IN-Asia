import styled from "@emotion/styled";
import { FLEX_STYLE, WHITE_COLOR } from "config";

export const Wrapper = styled.div`
  background: url(https://image.aladin.co.kr/product/22066/71/cover500/c382831048_1.jpg);
  background-size: 100% 100%;
  padding: 1rem;
  height: 200px;
  position: relative;
  cursor: pointer;
  .mask {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(0, 0, 0, 0.3) 100%
    );
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
  }
  ${FLEX_STYLE("flex-start", "flex-end")};
  h3 {
    z-index: 1;
    color: ${WHITE_COLOR};
  }
`;
