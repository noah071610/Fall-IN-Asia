import styled from "@emotion/styled";
import { FLEX_STYLE, GRID_STYLE, MODAL_STYLE } from "config";

export const SignupModalWrapper = styled.div`
  width: 45%;
  top: 62px;
  right: 0;
  ${MODAL_STYLE("10%")};
  padding: 1rem 2rem;
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
  .form-name {
    ${GRID_STYLE("1rem", "1fr 1fr")};
  }
  .ant-form-item {
    margin-bottom: 0.8rem;
  }
  .submit-btn {
    width: 100%;
    margin: 2.5rem 0 1.5rem 0;
    ${FLEX_STYLE("flex-end", "center")};
    button {
      width: 50%;
    }
  }
  div[role="alert"] {
    font-size: 0.75rem;
  }
`;
