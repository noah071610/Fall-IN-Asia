import styled from "@emotion/styled";
import { BORDER_THIN, FLEX_STYLE, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.4s all;
  .image-wrapper {
    overflow: hidden;

    img {
      transition: 0.3s all;
      width: 100%;
      height: 200px;
    }
  }
  h3 {
    margin: 0.8rem 0 0.6rem 0;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .tag {
    font-size: 0.6rem;
    padding: 0.3rem 0.5rem;
  }
  h5 {
    margin-bottom: 0.6rem;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
    h3 {
      text-decoration: underline;
    }
  }
`;
