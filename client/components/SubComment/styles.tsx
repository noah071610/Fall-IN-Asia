import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RED_COLOR, RGB_BLACK } from "config";

export const SubCommentWrapper = styled.div`
  padding: 1rem 2rem 1rem 3.7rem;
  position: relative;
  .more-btn {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
  }
  .icon {
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
