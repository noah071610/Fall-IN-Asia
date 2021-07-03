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
  width: 45%;
  top: 62px;
  right: 0;
  ${MODAL_STYLE("10%")};
  .info-top {
    margin-bottom: 1rem;
    ${GRID_STYLE("1rem", "1fr 2fr")};
    .icon {
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .interface {
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
      }
    }
  }
  .announcement {
    width: 100%;
    ${BORDER_THIN("border-bottom")};
    ${FLEX_STYLE("flex-start", "center")};
    img {
      width: 3.3rem;
      padding-left: 0.3rem;
      margin-right: 0.5rem;
    }
  }
  .announce-list {
    padding-top: 0.5rem;
    li {
      display: block;
      padding: 0.8rem 0.3rem;
      transition: 0.3s all;
      cursor: pointer;
      .category {
        ${BORDER_THIN("border")};
        padding: 0.2rem 0.5rem;
        background: ${WHITE_COLOR};
        margin-right: 0.4rem;
        font-size: 0.75rem;
      }
      &:hover {
        background: ${RGB_BLACK(0.03)};
      }
    }
  }
`;
