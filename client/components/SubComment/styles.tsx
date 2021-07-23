import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRAY_COLOR, RED_COLOR, RGB_BLACK } from "config";

export const SubCommentWrapper = styled.div`
  padding: 1rem 2rem 1rem 3.7rem;
  position: relative;
  .delete-btn {
    position: absolute;
    top: 0.5rem;
    right: 0;
    border-radius: 50%;
    padding: 0.5rem;
    &:hover {
      background: ${GRAY_COLOR};
    }
  }
  .icon {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
