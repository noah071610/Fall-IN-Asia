import styled from "@emotion/styled";
import { BLUE_COLOR, GRID_STYLE, RGB_BLACK } from "config";

export const NewsArticleWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  border: 2px solid ${RGB_BLACK("0.08")};
  ${GRID_STYLE("3rem", "3fr 6fr")};
  cursor: pointer;
  &:hover {
    background: ${RGB_BLACK("0.03")};
    h2,
    p {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
  }
  h2 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.8;
  }
`;
