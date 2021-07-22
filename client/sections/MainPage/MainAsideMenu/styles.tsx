import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, RGB_BLACK } from "config";

export const MainAsideMenuWrapper = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 15px;
  height: 100%;
  padding: 1rem;
  position: sticky;
  top: 2rem;
  .country {
    .country-img {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      border-radius: 15px;
      img {
        width: 100%;
        height: 120px;
        box-shadow: 0px 0px 3px ${RGB_BLACK(0.3)};
        border-radius: 15px;
      }
    }
    .country-desc {
      margin: 1rem 0;
      a {
        ${FONT_STYLE(1.4, true)}
      }
      div {
        margin-top: 0.5rem;
        span {
          display: block;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  ul {
    display: block;
    font-size: 1rem;
    padding-top: 1rem;
    li {
      padding: 0.8rem 0.5rem;
      display: block;
      cursor: pointer;
      border-radius: 15px;
      .icon {
        width: 1rem;
        height: 1rem;
        margin-right: 0.8rem;
      }
      &:hover {
        background: ${GRAY_COLOR};
      }
    }
  }
  .menu-active {
    background: ${GRAY_COLOR};
  }
`;
