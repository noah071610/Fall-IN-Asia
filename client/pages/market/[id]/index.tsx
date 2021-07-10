import React, { FC, useEffect } from "react";
import MarketLayout from "@sections/MarketLayout";
import MarketPostSection from "@sections/MarketPage/MarketPostSection";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import router from "next/router";
interface IProps {}

const index: FC<IProps> = () => {
  const { marketPostDeleteDone } = useSelector((state: RootState) => state.market);
  useEffect(() => {
    if (marketPostDeleteDone) {
      router.push(`/market`);
    }
  }, [marketPostDeleteDone]);
  return (
    <MarketLayout>
      <MarketPostSection />
    </MarketLayout>
  );
};

export default index;
