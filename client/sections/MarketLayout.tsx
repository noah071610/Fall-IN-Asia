import React, { FC, useCallback } from "react";
import styled from "@emotion/styled";
import MarketFilter from "@sections/MarketFilter";
import GoodsCard from "@components/GoodsCard";
import useSWR from "swr";
import router, { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";

import CommonTitle from "@components/Common/CommonTitle";
import { GRID_STYLE, noRevalidate, toastErrorMessage } from "config";
import { IMarketPost } from "@typings/db";

export const MarketWrapper = styled.div`
  padding: 2rem;
  .goods-cards {
    margin: 3rem 0;
    ${GRID_STYLE("1.5rem", "repeat(3,1fr)")};
  }
`;
const MarketLayout: FC = ({ children }) => {
  const { data: marketPosts, error } = useSWR("/market", fetcher);
  const { user } = useSelector((state: RootState) => state.user);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }
  const onClickMarketPostBtn = useCallback(() => {
    router.push("/market/post");
  }, []);
  return (
    <MarketWrapper>
      <CommonTitle title="マーケット" subtitle="グッズ販売や交換を簡単に">
        {user && (
          <button onClick={onClickMarketPostBtn} className="basic-btn">
            グッズ登録
          </button>
        )}
      </CommonTitle>
      {children}
      <MarketFilter />
      <div className="goods-cards">
        {marketPosts?.map((v: IMarketPost, i: number) => {
          return <GoodsCard key={i} marketPost={v} />;
        })}
      </div>
    </MarketWrapper>
  );
};

export default MarketLayout;
