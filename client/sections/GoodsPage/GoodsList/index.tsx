import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import GoodsCard from "@components/GoodsCard";
import { Divider } from "antd";
interface IProps {}

const GoodsList: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <h2>グッズリスト</h2>
      <div className="filter-wrapper">
        <h3>選択タグ : </h3>
        <ul>
          <li className="tag">안녕</li>
        </ul>
      </div>
      <Divider />
      <div className="goods-cards">
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
    </Wrapper>
  );
};

export default GoodsList;
