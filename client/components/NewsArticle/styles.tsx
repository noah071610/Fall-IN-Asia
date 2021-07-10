import styled from "@emotion/styled";
import { BORDER_THIN, GRID_STYLE, RGB_BLACK } from "config";

export const NewsArticleWrapper = styled.div`
  display: flex;
  height: 410px;
  ${GRID_STYLE("1rem", "3fr 2fr")};
  .hot-topic-article {
    cursor: pointer;
    padding: 1.5rem;
    ${BORDER_THIN("border")};
    &:hover {
      h2 {
        text-decoration: underline;
      }
      background: ${RGB_BLACK(0.03)};
      img {
        transform: scale(1.08);
      }
    }
    div {
      overflow: hidden;
      img {
        transition: 0.3s all;
        width: 100%;
        margin-bottom: 1rem;
      }
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
  .sub-topic-article {
    overflow-y: hidden;
  }
`;
