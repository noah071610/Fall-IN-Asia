import styled from "@emotion/styled";
import { BLUE_COLOR, RGB_BLACK } from "config";

export const Wrapper = styled.div`
  height: 500px;
  margin: 0 2rem 1rem 2rem;
  background: url(https://images.unsplash.com/photo-1512418490979-92798cec1380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
    center no-repeat;
  position: relative;
  h2 {
    position: absolute;
    left: 7%;
    top: 25%;
    font-size: 2rem;
    font-weight: bold;
    span {
      color: ${BLUE_COLOR};
      font-size: 3rem;
    }
  }
  .goods-poster-list {
    width: 40%;
    height: 400px;
    position: absolute;
    right: 5%;
    padding: 0 1rem;
    border-radius: 5px;
    border: 1px solid ${RGB_BLACK("0.1")};
    box-shadow: 0px 0px 15px ${RGB_BLACK("0.5")};
    transform: translateY(-50%);
    top: 50%;
    background-color: white;
    overflow: hidden;
    transition: 0.4s all;
    &:hover {
      transform: translate(0, -51%);
      box-shadow: 0px 10px 30px ${RGB_BLACK("0.5")};
    }
    .goods-list {
      padding: 1.5rem 1rem;
      .message {
        padding-left: 1rem;
        display: inline-block;
      }
      border-bottom: 1px solid ${RGB_BLACK("0.08")};
    }
  }
`;
