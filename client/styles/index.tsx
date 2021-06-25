import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RED_COLOR, RGB_BLACK, WHITE_COLOR } from "config";

export const MainWrapper = styled.div`
  padding: 2rem 0;
`;

export const NewsSection = styled.div`
  display: flex;
  padding: 1rem;
  height: 410px;
  .slider-box {
    padding: 1rem;
    width: 60%;
  }
  .article-box {
    margin: 1rem;
    width: 40%;
  }
`;

export const GoodsExchangeSection = styled.div`
  height: 500px;
  margin: 0 2rem 1rem 2rem;
  background: url(https://images.unsplash.com/photo-1512418490979-92798cec1380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
    center no-repeat;
  position: relative;
  h2 {
    position: absolute;
    left: 7%;
    top: 27%;
    font-size: 2rem;
    font-weight: bold;
    span {
      color: ${BLUE_COLOR};
      font-size: 3rem;
    }
  }
  .goods-poster-list {
    width: 40%;
    height: 380px;
    position: absolute;
    right: 5%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${RGB_BLACK("0.1")};
    box-shadow: 0px 0px 15px ${RGB_BLACK("0.5")};
    transform: translateY(-50%);
    top: 50%;
    background-color: white;
    overflow: hidden;
    transition: 0.4s all;
    &:hover {
      transform: translate(-5px, -51%);
      box-shadow: 10px 10px 30px ${RGB_BLACK("0.5")};
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

export const MusicChartSection = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  padding: 1rem 2rem;
  .chart {
    &-another {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const SupportSection = styled.div`
  height: 500px;
  margin: 1rem 2rem;
  background: url(https://images.unsplash.com/photo-1603292498182-95edce1e705b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
    center no-repeat fixed;
  background-size: 100% 100%;
  ${FLEX_STYLE("center", "center")};
  flex-direction: column;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-size: 2.5rem;
    color: ${WHITE_COLOR};
    text-align: center;
    z-index: 1;
    span {
      font-size: 4rem;
      color: ${RED_COLOR};
    }
  }
  h3 {
    color: ${WHITE_COLOR};
    z-index: 1;
  }
  img {
    width: 100%;
  }
`;

export const CommunitySection = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  div {
    ${FLEX_STYLE("flex-start", "center")}
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${RGB_BLACK("0.1")};
    box-shadow: 2px 2px 5px ${RGB_BLACK("0.2")};
    h2 {
      margin-left: 2rem;
    }
  }
`;
