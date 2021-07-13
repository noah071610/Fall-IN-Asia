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
  width: 50%;
  top: 62px;
  right: 0;
  ${MODAL_STYLE("10%")};
  .info-top {
    ${GRID_STYLE("2rem", "1.5fr 2.5fr")};
    margin-bottom: 2rem;
    .icon {
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .info-desc {
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
`;
