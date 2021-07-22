import styled from "@emotion/styled";
import {
  BORDER_THIN,
  FLEX_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  MODAL_STYLE,
  RGB_BLACK,
  WHITE_STYLE,
} from "config";

export const SignupModalWrapper = styled.div`
  position: absolute;
  ${WHITE_STYLE(false, "450px")};
  padding: 1rem 2rem;
  top: 60px;
  right: 1rem;
  z-index: 10;
  box-shadow: 0px 0px 15px ${RGB_BLACK(0.15)};
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
  input {
    box-shadow: 0px 0px 8px ${RGB_BLACK(0.15)};
    border-radius: 10px;
    padding: 0.3rem 1rem;
  }
  .form-name {
    ${GRID_STYLE("1rem", "1fr 1.5fr")};
  }
  .ant-form-item {
    margin-bottom: 0.8rem;
  }
  .btn-wrapper {
    margin: 2rem 0 1rem 0;
    ${GRID_STYLE(".7rem", "1fr 1fr")};
    button {
      padding: 0.6rem 0;
      background: ${GRAY_COLOR};
      border-radius: 15px;
      &:hover {
        background: ${RGB_BLACK(0.15)};
      }
    }
  }
`;
