import styled from "@emotion/styled";
import { FONT_STYLE, GRAY_COLOR, RGB_BLACK } from "config";

export const CountryImageWrapper = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 15px;
  height: 100%;
  padding: 1rem;
  .country {
    .world-img {
      display: inline-block;
      padding: 0.5rem;
      box-shadow: 0px 0px 3px ${RGB_BLACK(0.08)};
      border-radius: 15px;
    }
    h2 {
      margin: 1rem 0;
      ${FONT_STYLE(1.4, true)}
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
`;
