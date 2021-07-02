import styled from "@emotion/styled";
import { FLEX_STYLE, GRID_STYLE, MODAL_STYLE } from "config";

export const ModalWrapper = styled.div`
  top: 62px;
  right: 0;
  ${MODAL_STYLE("10%")};
  width: 45%;
  padding: 1rem 2rem 3rem 2rem;
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
    input {
      margin-bottom: 1rem;
    }
  }
`;

export const LoginBtn = styled.div`
  margin-top: 1rem;
  ${GRID_STYLE("0", "1fr 1fr")};
`;
