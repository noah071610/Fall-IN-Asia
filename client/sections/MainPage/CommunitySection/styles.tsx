import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  .community-filter {
    li {
      padding: 0.7rem 1.5rem;
      margin-right: 0.2rem;
      border: 1px solid ${RGB_BLACK("0.1")};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border-bottom: none;
      font-size: 0.75rem;
    }
  }
  .community-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    border: 1px solid ${RGB_BLACK("0.1")};
    padding: 2rem;
    .community-poster {
      img:first-of-type {
        width: 100%;
        margin-bottom: 2rem;
      }
      h2 {
        font-weight: bold;
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid ${RGB_BLACK("0.15")};
      }
    }
    .rader {
      width: 100%;
      height: 350px;
    }

    h3 {
      text-align: center;
      margin-bottom: 2rem;
    }
    ul {
      ${FLEX_STYLE("center", "center")};
      flex-wrap: wrap;
    }
  }
`;
