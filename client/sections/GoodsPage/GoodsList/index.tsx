import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import GoodsCard from "@components/GoodsCard";

interface IProps {}

const GoodsList: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <h2>グッズリスト</h2>
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
