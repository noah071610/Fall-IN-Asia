import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE } from "config";

export const SubCommentFormWrapper = styled.div`
  padding: 1rem 0 1rem 3rem;
  ${BORDER_THIN("border-bottom")};
  transition: 0.3s all;
  .name-space {
    ${FLEX_STYLE("flex-start", "center")};
    margin-bottom: 0.5rem;
    .icon {
      img {
        width: 2rem;
        border-radius: 50%;
      }
      margin-right: 0.7rem;
    }
    .name {
      margin-right: 1rem;
    }
  }
  .subComment-input {
    display: flex;
    button {
      width: 120px;
    }
  }
`;
