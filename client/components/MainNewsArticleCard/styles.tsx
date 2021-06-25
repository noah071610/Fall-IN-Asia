import styled from "@emotion/styled";
import { RGB_BLACK } from "config";

export const ArticleWrapper = styled.li`
  display: flex;
  margin: 0.1rem 1rem 1rem 1rem;
  box-shadow: 1px 1px 9px ${RGB_BLACK("0.1")};
  padding: 1rem;
  cursor: pointer;
  z-index: 1;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 15px ${RGB_BLACK("0.2")};
  }
  transition: 0.4s all;
  div {
    padding-left: 1rem;
    font-size: 0.8rem;
  }
  img {
    width: 40%;
  }
`;
