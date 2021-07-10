import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, MODAL_STYLE, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  cursor: pointer;
  .image-wrapper {
    overflow: hidden;
    img {
      border-radius: 10px;
      transition: 0.3s all;
      width: 100%;
      height: 200px;
    }
    padding-bottom: 1rem;
    ${BORDER_THIN("border-bottom")};
  }
  .desc-wrapper {
    cursor: pointer;
    position: relative;
    .desc {
      h3 {
        margin-top: 0.8rem;
        font-size: 1.3rem;
        font-weight: bold;
      }
      ul {
        margin-top: 0.8rem;
        .tag {
          font-size: 0.8rem;
          padding: 0.3rem 0.5rem;
        }
      }

      .name-space {
        img {
          display: inline-block;
          margin-right: 0.5rem;
          width: 2rem;
          border-radius: 50%;
        }
        margin-top: 1.5rem;
      }
    }
  }
`;
