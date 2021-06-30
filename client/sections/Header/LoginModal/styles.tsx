import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRID_STYLE, RGB_BLACK, WHITE_COLOR } from "config";

export const ModalWrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 400px;
  top: 62px;
  right: 0;
  padding: 1rem 2rem;
  ${BORDER_THIN("border")};
  background-color: ${WHITE_COLOR};
  box-shadow: 2px 2px 10px ${RGB_BLACK(0.2)};
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
      margin: 0.7rem 0;
      font-size: 0.8rem;
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
  ${BORDER_THIN("border")};
  border-bottom: none;
  border-right: none;
  content: "";
  top: -6px;
  right: 10%;
`;

export const LoginBtn = styled.div`
  margin-top: 2rem;
  ${GRID_STYLE("0", "1fr 1fr")};
  button {
    padding: 0.8rem 0;
    ${BORDER_THIN("border")};
    &:hover {
      border: 1px solid ${BLUE_COLOR};
      color: ${BLUE_COLOR};
    }
  }
`;
