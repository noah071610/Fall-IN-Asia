import styled from "@emotion/styled";
import {
  BLUE_COLOR,
  BORDER_THIN,
  FLEX_STYLE,
  GRID_STYLE,
  MODAL_STYLE,
  RGB_BLACK,
  WHITE_COLOR,
} from "config";

export const DescritionSectionWrapper = styled.div`
  padding: 2rem;
  .image-wrapper {
    cursor: pointer;
    margin-bottom: 2rem;
    border-radius: 10px;
    .ant-image {
      width: 100%;
      .ant-image-img {
        width: 100%;
        height: 450px;
        border-radius: 10px;
      }
      .anticon {
        font-size: 3rem;
      }
    }
  }
  .desc {
    ${FLEX_STYLE("space-between", "center")};
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    h3 {
      margin-bottom: 1rem;
    }
    .chat {
      ${FLEX_STYLE("center", "center")};
      flex-direction: column;
      .chat-icon {
        background: ${RGB_BLACK(0.15)};
        border-radius: 50%;
        margin-bottom: 0.5rem;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
        transition: 0.3s all;
        ${FLEX_STYLE("center", "center")};
        img {
          transition: 0.3s all;
          width: 60%;
        }
        &:hover {
          background: ${RGB_BLACK(0.4)};
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  p {
    margin-bottom: 3rem;
    font-size: 1rem;
    line-height: 2;
  }
`;
