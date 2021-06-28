import styled from "@emotion/styled";
import { RGB_BLACK } from "config";

export const Wrapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
  .search-bar {
    .ant-input-search {
      width: 50%;
    }
    .hot-group-list {
      display: flex;
      margin: 1rem 0;
      h2 {
        margin-right: 1rem;
      }
      .tag {
        margin: 0;
      }
    }
  }
  .slick-slider {
    .left-arrow {
      display: block;
      z-index: 1;
      top: 50%;
      position: absolute;
      font-size: 2rem;
      transform: translateY(-50%);
      color: ${RGB_BLACK("0.8")};
      cursor: pointer;
    }
    .right-arrow {
      display: block;
      z-index: 1;
      top: 50%;
      right: 0;
      position: absolute;
      font-size: 2rem;
      transform: translateY(-50%);
      color: ${RGB_BLACK("0.8")};
      cursor: pointer;
    }
  }
`;
