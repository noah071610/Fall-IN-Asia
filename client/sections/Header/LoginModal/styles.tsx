import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const ModalWrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 400px;
  top: 62px;
  right: 0;
  padding: 1rem 2rem;
  border: 1.5px solid ${RGB_BLACK("0.1")};
  background-color: ${WHITE_COLOR};
  .login-title {
    padding: 0.5rem 0;
    ${FLEX_STYLE("space-between", "center")};
    h2 {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    img {
      width: 4rem;
    }
  }
  form {
    h4 {
      margin-bottom: 0.7rem;
      span {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const MenuTail = styled.div`
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 1;
  width: 9px;
  height: 9px;
  background-color: ${WHITE_COLOR};
  border: 1.5px solid ${RGB_BLACK("0.2")};
  border-bottom: none;
  border-right: none;
  content: "";
  top: -6px;
  right: 10%;
`;
