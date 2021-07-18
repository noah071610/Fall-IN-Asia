import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE } from "config";

export const SubCommentFormWrapper = styled.div`
  padding: 0.5rem 0 0.5rem 2.8rem;
  transition: 0.3s all;
  ${FLEX_STYLE("flex-start", "center")};
  .icon {
    img {
      width: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  .subComment-input {
    width: 100%;
    display: flex;
    div {
      button {
        font-size: 0.8rem;
        width: 100px;
        padding: 0.5rem 0.7rem;
      }
      ${FLEX_STYLE("center", "flex-end")};
    }
  }
`;
