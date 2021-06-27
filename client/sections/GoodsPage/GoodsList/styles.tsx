import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  h2 {
    margin-bottom: 1.3rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .filter-wrapper {
    padding-bottom: 1rem;
    ${FLEX_STYLE("flex-start", "flex-end")};
    ul {
      margin-left: 1rem;
      .tag {
        margin: 0 0.5rem 0 0;
      }
    }
    h3 {
      padding-bottom: 0.3rem;
    }
  }
  .goods-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-top: 3rem;
  }
`;
