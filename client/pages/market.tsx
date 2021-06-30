import React, { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";
import GoodsCard from "@components/GoodsCard";
import { BORDER_THIN, FLEX_STYLE, GRID_STYLE, RGB_BLACK } from "config";
import { Pagination } from "antd";
import GoodsTitle from "@sections/GoodsPage/GoodsTitle";

const MarketWrapper = styled.div`
  padding: 2rem;
  .goods-cards {
    margin-top: 2rem;
    padding: 2rem 1rem;
    ${GRID_STYLE("1.5rem", "repeat(4,1fr)")};
    ${BORDER_THIN("border")};
  }
  .market-pagination {
    width: 100%;
    padding: 2rem 0;
    ${FLEX_STYLE("flex-end", "center")};
    input {
      margin-right: 0;
    }
  }
`;

interface Props {}

const market: FC<Props> = () => {
  const [onFilter, setOnFilter] = useState(false);
  const onClickFilter = useCallback(() => {
    setOnFilter((prev) => !prev);
  }, []);
  return (
    <MarketWrapper>
      <GoodsTitle />
      <div className="goods-cards">
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
      <div className="market-pagination">
        <Pagination showQuickJumper defaultCurrent={1} total={50} />
      </div>
      <div className="big-margin-div" />
    </MarketWrapper>
  );
};

export default market;
