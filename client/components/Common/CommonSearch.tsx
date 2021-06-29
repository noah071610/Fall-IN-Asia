import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { BLUE_COLOR, FLEX_STYLE, RGB_BLACK } from "config";
import { Input } from "antd";
const { Search } = Input;

const CommonSearchWrapper = styled.div`
  margin-top: 2rem;
  .search-bars {
    .ant-input-search {
      width: 50%;
      margin-right: 1rem;
    }
    ul {
      display: inline-block;
    }
  }
`;
interface IProps {}

const CommonSearch: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommonSearchWrapper>
      <div className="search-bars">
        <Search />
        <ul>
          <li className="tag">
            <a>BTS</a>
          </li>
          <li className="tag">
            <a>Black Pink</a>
          </li>
          <li className="tag">
            <a>에스티</a>
          </li>
        </ul>
      </div>
    </CommonSearchWrapper>
  );
};

export default CommonSearch;
