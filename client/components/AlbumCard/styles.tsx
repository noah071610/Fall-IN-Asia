import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { RGB_BLACK, WHITE_COLOR } from "config";

export const AlbumCardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${RGB_BLACK("0.3")};
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 1))
    );
  }
  &:hover {
    h3,
    p {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
  }
`;

export const albumTitleCss = (isTop: boolean) => css`
  position: absolute;
  padding: ${isTop ? "1rem" : "0.5rem"};
  width: 100%;
  bottom: 0;
  z-index: 1;
  color: ${WHITE_COLOR};
  font-size: ${isTop ? "1.5rem" : "0.9rem"};

  h3 {
    color: ${WHITE_COLOR};
    font-family: "Oswald", sans-serif;
    font-weight: bold;
  }
`;
