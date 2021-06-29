import styled from "@emotion/styled";
import { RGB_BLACK } from "config";

export const Wrapper = styled.div`
  padding: 1rem;
  border: 1px solid ${RGB_BLACK("0.08")};
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${RGB_BLACK("0.15")};
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0px 20px 20px ${RGB_BLACK("0.5")};
  }
  img {
    width: 100%;
    height: 250px;
  }
  h3 {
    margin: 1rem 0;
    font-weight: bold;
  }
  p {
    margin: 1rem 0;
    span {
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
`;
