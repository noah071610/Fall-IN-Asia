import React, { FC, useState } from "react";
import GoodsList from "@sections/GoodsPage/GoodsList";
import GoodsFilter from "@sections/GoodsPage/GoodsFilter";
import styled from "@emotion/styled";

const GoodsPageWrapper = styled.div`
  margin-top: 1rem;
`;

interface Props {}

const goods: FC<Props> = () => {
  const [state, setstate] = useState();
  return (
    <GoodsPageWrapper>
      <GoodsFilter />
      <GoodsList />
    </GoodsPageWrapper>
  );
};

export default goods;
