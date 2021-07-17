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

export const UserInfoModalWrapper = styled.div`
  width: 55%;
  top: 62px;
  right: 0;
  ${MODAL_STYLE("10%")};
  .info-top {
    ${FLEX_STYLE("flex-start", "center")};
    margin-bottom: 2rem;
    .icon {
      position: relative;
      img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
      .add-icon {
        width: 130px;
        height: 130px;
        ${FLEX_STYLE("center", "center")};
        position: absolute;
        transition: 0.3s all;
        top: 0;
        left: 0;
        color: ${WHITE_COLOR};
        cursor: pointer;
        opacity: 0;
        font-size: 2rem;
      }
      &:hover {
        .add-icon {
          opacity: 1;
          background: ${RGB_BLACK(0.3)};
          border-radius: 50%;
        }
      }
    }
    .info-desc {
      padding-left: 1rem;
      h3 {
        font-weight: bold;
        margin-bottom: 0.3rem;
      }
      h4 {
        margin-bottom: 1rem;
      }
      li {
        display: block;
        margin-bottom: 0.5rem;
        span {
          color: ${BLUE_COLOR};
          font-weight: bold;
          margin-left: 0.3rem;
        }
        .tag {
          margin: 0 0 0 0.8rem;
        }
      }
    }
  }
  .info-bottom {
    display: flex;
    &-menu {
      height: 100%;
      width: 38%;
      box-shadow: 1px 1px 8px ${RGB_BLACK(0.08)};
      li {
        width: 100%;
        button {
          padding: 0.7rem 0;
          background: none;
          width: 100%;
          border: none;
          cursor: pointer;
          &:hover {
            background: ${RGB_BLACK(0.15)};
          }
        }
      }
      .active {
        background: ${BLUE_COLOR};
        color: ${WHITE_COLOR};
      }
    }
    &-desc {
      width: 100%;
    }
  }

  .icon-cropper {
    height: 80vh;
    padding-right: 1rem;
    overflow-y: auto;
    h3 {
      margin: 0.7rem 0;
      font-weight: bold;
    }
    h3:first-of-type {
      margin-top: 1.5rem;
    }
    .dragger {
      height: 100%;
      div {
        padding: 0;
      }
    }
    .submit-btn-wrapper {
      margin: 1rem 0;
      ${FLEX_STYLE("flex-end", "center")};
    }
  }
`;
