import styled from "@emotion/styled";
import { FLEX_STYLE, FONT_STYLE, GRAY_COLOR } from "config";

export const BoxCardWrapper = styled.div`
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  padding-top: 1rem;
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.05);
      }
    }
  }
  .image-wrapper {
    border-radius: 10px;
    margin: 0 1rem 1rem 1rem;
    overflow: hidden;
    img {
      transition: 0.3s all;
      border-radius: 10px;
      width: 100%;
      height: 200px;
    }
  }
  .box-card-info {
    padding: 0 1rem;
    ${FLEX_STYLE("space-between", "center")};
    .box-card-list {
      li {
        padding: 0.3rem;
        cursor: pointer;
        .count {
          margin: 0 0.3rem;
        }
        .anticon {
          font-size: 1.2rem;
        }
        &:hover {
          background: ${GRAY_COLOR};
          border-radius: 5px;
        }
      }
    }
  }
  h2 {
    padding: 1rem;
    ${FONT_STYLE(0.85, false)};
  }
`;
