import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, MODAL_STYLE, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  transition: 0.4s all;
  cursor: pointer;
  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
  .image-wrapper {
    overflow: hidden;
    img {
      transition: 0.3s all;
      width: 100%;
      height: 200px;
    }
  }
  .desc-wrapper {
    cursor: pointer;
    ${GRID_STYLE("1rem", "2fr 1fr")}
    position: relative;
    .desc {
      h3 {
        margin: 0.8rem 0 0.6rem 0;
        font-size: 0.9rem;
        font-weight: bold;
      }
      .tag {
        font-size: 0.6rem;
        padding: 0.3rem 0.5rem;
      }
      h5 {
        margin-bottom: 0.6rem;
      }
    }
  }
`;
