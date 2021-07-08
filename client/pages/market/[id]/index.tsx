import React, { FC, useEffect, useState } from "react";
import MarketLayout from "@sections/MarketLayout";
import DescritionSection from "@components/DescritionSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastSuccessMessage } from "config";
import { marketSlice } from "slices/market";
import router from "next/router";
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { marketPostDeleteDone } = useSelector((state: RootState) => state.market);
  useEffect(() => {
    if (marketPostDeleteDone) {
      router.push(`/market`);
      toastSuccessMessage("ポストを成功的に削除致しました。");
      dispatch(marketSlice.actions.marketPostDeleteClear);
    }
  }, [marketPostDeleteDone]);
  return (
    <MarketLayout>
      <DescritionSection />
    </MarketLayout>
  );
};

export default index;
