import React, { FC, useCallback, useState } from "react";
import GoodsTitle from "@sections/GoodsPage/GoodsTitle";
import styled from "@emotion/styled";
import GoodsCard from "@components/GoodsCard";
import { BORDER_THIN, RGB_BLACK } from "config";

const GoodsPageWrapper = styled.div`
  margin-top: 1rem;
  .goods-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem;
    padding: 2rem;
    ${BORDER_THIN("border")};
  }
`;

interface Props {}

const goods: FC<Props> = () => {
  return (
    <GoodsPageWrapper>
      <GoodsTitle />
      <div className="goods-cards">
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </div>
    </GoodsPageWrapper>
  );
};

export default goods;
