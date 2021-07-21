import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, GRAY_COLOR, HOVER_GRAY, RGB_BLACK } from "config";

export const SubCommentFormWrapper = styled.div`
  padding: 1rem 0 0 3.7rem;
  transition: 0.3s all;
  ${FLEX_STYLE("flex-start", "center")};
  .icon {
    img {
      width: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  button {
    width: 100px;
    padding: 0.5rem 0.8rem;
    background: ${GRAY_COLOR};
    border-radius: 5px;
    margin-left: 0.5rem;
    &:hover {
      background: ${RGB_BLACK(0.15)};
    }
  }
`;
