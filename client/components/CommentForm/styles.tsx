import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";

export const CommentFormWrapper = styled.div`
  ${FLEX_STYLE("space-between", "center")};
  padding: 1rem 2rem;
  .name-space {
    ${FLEX_STYLE("flex-start", "center")};
    .icon {
      img {
        width: 2.5rem;
      }
      margin-right: 0.7rem;
    }
    .name {
      margin-right: 1rem;
      font-size: 1.2rem;
    }
  }
  .ant-input {
    width: 75%;
  }
`;
