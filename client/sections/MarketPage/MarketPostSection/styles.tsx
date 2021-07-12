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

export const MarketPostSectionWrapper = styled.div`
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
    ${FLEX_STYLE("space-between", "flex-end")};
    padding-bottom: 1rem;
    ${BORDER_THIN("border-bottom")};
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    ul {
      .tag {
        margin: 0 0.8rem 0 0;
      }
    }
    .name-space {
      img {
        display: inline-block;
        margin-right: 0.7rem;
        width: 2.5rem;
        border-radius: 50%;
      }
      span {
        font-size: 1rem;
      }
      margin-top: 2rem;
    }
    .chat {
      ${FLEX_STYLE("center", "center")};
      flex-direction: column;
      .chat-icon {
        position: relative;
        background: ${RGB_BLACK(0.1)};
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
          background: ${RGB_BLACK(0.2)};
          img {
            transform: scale(1.1);
          }
        }
        .password-modal {
          top: 8rem;
          right: 1.1rem;
        }
      }
    }
  }
  .post-title-menu {
    li {
      font-size: 1.5rem;
      margin: 1rem 0.5rem;
    }
  }
  .content {
    margin: 3rem 0;
    font-size: 1rem;
    line-height: 2;
  }
`;
