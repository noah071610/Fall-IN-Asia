import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, HOVER_GRAY, WHITE_STYLE } from "config";

export const StoryOwnerAnotherPostsWrapper = styled.div`
  margin-top: 3rem;
  padding: 0 2rem;
  width: 100%;
  ${FLEX_STYLE("center", "center")};
  .owner-info-wrapper {
    ${FLEX_STYLE("center", "center")};
    flex-direction: column;
    width: 40%;
  }
  .icon {
    img {
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
    }
  }
  .info {
    .name {
      margin-top: 1rem;
      text-align: center;
    }
    .introduce {
      margin-top: 0.8rem;
    }
  }
  .links {
    margin-top: 1.1rem;
    button {
      ${HOVER_GRAY(10)};
      padding: 0.5rem 0.4rem;
      border-radius: 5px;
    }
  }
`;
