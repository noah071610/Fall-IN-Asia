import styled from "@emotion/styled";
import { BLUE_COLOR, BORDER_THIN, FLEX_STYLE, HOVER_GRAY } from "config";

export const SubCommentFormWrapper = styled.div`
  padding: 1rem 0 0.5rem 3.7rem;
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
    ${HOVER_GRAY(5)};
  }
`;
