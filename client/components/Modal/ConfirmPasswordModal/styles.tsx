import { css } from "@emotion/react";
import { FLEX_STYLE, MODAL_STYLE } from "config";

export const passwordModalWrapper = (isDelete: boolean) => css`
  ${isDelete ? "right: -0.5rem" : "right: 1.8rem"};
  ${MODAL_STYLE("5%")};
  padding: 1rem;
  top: 2.5rem;
  width: 300px;
  ${FLEX_STYLE("center", "flex-start")};
  flex-direction: column;
  h4 {
    width: 100%;
    padding-bottom: 0.7rem;
    .point {
      font-size: 0.9rem;
    }
  }
  form {
    display: flex;
    width: 100%;
  }
`;
