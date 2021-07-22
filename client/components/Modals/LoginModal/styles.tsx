import styled from "@emotion/styled";
import {
  BORDER_THIN,
  CENTER_POSITION,
  FLEX_STYLE,
  GRAY_COLOR,
  GRID_STYLE,
  RGB_BLACK,
  WHITE_COLOR,
  WHITE_STYLE,
} from "config";

export const LoginModalWrapper = styled.div`
  position: absolute;
  ${WHITE_STYLE(false, "400px")};
  padding: 1rem;
  top: 60px;
  right: 1rem;
  z-index: 10;
  box-shadow: 0px 0px 15px ${RGB_BLACK(0.15)};
  animation: modalIn 0.15s;
  .image-wrapper {
    padding: 2rem 0;
    ${FLEX_STYLE("center", "center")};
    img {
      width: 50%;
    }
  }
  h4 {
    .icon {
      margin-right: 0.5rem;
    }
    margin: 1rem 0;
  }
  input {
    transition: 0.3s all;
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)};
    &:focus {
      box-shadow: 0px 0px 15px ${RGB_BLACK(0.3)};
      border: none;
    }
  }
  .btn-wrapper {
    margin: 2rem 0 1rem 0;
    ${GRID_STYLE(".7rem", "1fr 1fr")};
    button {
      padding: 0.85rem 0;
      background: ${GRAY_COLOR};
      border-radius: 15px;
      &:hover {
        background: ${RGB_BLACK(0.15)};
      }
    }
  }
`;
