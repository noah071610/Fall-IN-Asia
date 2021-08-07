import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, GRAY_COLOR, GRID_STYLE } from "config";
import tw from "twin.macro";

export const SignupModalWrapper = styled.div`
  .email-wrapper {
    ${GRID_STYLE("1rem", "calc(100% - 180px - 1rem) 180px")}
    .ant-form-item-control-input-content {
      height: 100%;
      button {
        ${tw`w-full h-full rounded-lg shadow-md text-xs`}
      }
    }
  }
  .email-check-wrapper {
    ${tw`w-1/2 pr-4`}
  }
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
