import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, RGB_BLACK } from "config";

export const CommentFormWrapper = styled.div`
  padding: 1rem 2rem 0 2.5rem;
  margin-bottom: 1rem;
  .name-space {
    ${FLEX_STYLE("flex-start", "center")};
    margin-bottom: 0.6rem;
    .icon {
      img {
        width: 2.5rem;
        border-radius: 50%;
      }
      margin-right: 0.7rem;
    }
    .name {
      margin-right: 1rem;
      font-size: 1rem;
    }
  }
  .input-wrapper {
    display: flex;
    div {
      width: 15%;
      ${FLEX_STYLE("center", "flex-end")};
      button {
        width: 100%;
        ${BORDER_THIN("border")};
        transition: 0.3s all;
        &:hover {
          border: 1px solid ${BLUE_COLOR};
        }
      }
    }
  }
  h3 {
    padding: 1rem 0;
    margin-right: 0.5rem;
    text-align: end;
    span {
      margin-right: 0.5rem;
    }
  }
`;
