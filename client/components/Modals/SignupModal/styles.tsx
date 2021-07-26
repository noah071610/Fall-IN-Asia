import styled from "@emotion/styled";
import { BLUE_COLOR, GRAY_COLOR, GRID_STYLE } from "config";
import tw from "twin.macro";

export const SignupModalWrapper = styled.div`
  input {
    box-shadow: none;
    background: ${GRAY_COLOR};
    border-radius: 10px;
    padding: 0.3rem 1rem;
  }
  .form-name {
    ${GRID_STYLE("1rem", "1fr 1fr")};
  }
  .ant-form-item {
    margin-bottom: 0.8rem;
  }
  .term {
    font-size: 0.9rem;
    font-weight: inherit;
    &:hover {
      font-weight: bold;
      color: ${BLUE_COLOR};
    }
  }
`;
