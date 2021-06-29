import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RGB_BLACK } from "config";

export const CommentFormWrapper = styled.div`
  padding: 1rem 2rem 0 2rem;
  .name-space {
    ${FLEX_STYLE("flex-start", "center")};
    margin-bottom: 0.3rem;
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
  .input-wrapper {
    display: flex;
    button {
      width: 15%;
      ${BORDER_THIN("border")};
      transition: 0.3s all;
      &:hover {
        border: 1px solid ${BLUE_COLOR};
      }
    }
  }
`;
