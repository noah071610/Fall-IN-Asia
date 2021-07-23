import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import GoodsCard from "@components/Cards/GoodsCard";
import router from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import CommonTitle from "@components/Common/CommonTitle";
import { GRID_STYLE, toastErrorMessage } from "config";
import { IMarketPost } from "@typings/db";
import MarketFilter from "./MarketPage/MarketFilter";
import {
  getMarketPostsAction,
  getMarketSearchPostsAction,
  getMarketTypePostsAction,
} from "actions/story";

export const MarketWrapper = styled.div`
  padding: 2rem;
  .goods-cards {
    margin: 3rem 0;
    ${GRID_STYLE("1.5rem", "repeat(3,1fr)")};
  }
`;

interface IType {
  keyword: null | string;
  area: null | string;
}

const MarketLayout: FC = ({ children }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>("タイプ全部");
  const [area, setArea] = useState<string>("全国");
  const { user } = useSelector((state: RootState) => state.user);
  const { marketPosts } = useSelector((state: RootState) => state.market);
  const onClickMarketPostBtn = useCallback(() => {
    router.push("/market/post");
  }, []);
  const onClickFilterKeyword = useCallback((type: string) => {
    setKeyword(type);
  }, []);
  const onClickFilterArea = useCallback((type: string) => {
    setArea(type);
  }, []);
  const onSearchMarketGoods = useCallback((searchWord: string) => {
    dispatch(getMarketSearchPostsAction(searchWord));
  }, []);
  useEffect(() => {
    if (keyword === "タイプ全部" && area === "全国") {
      dispatch(getMarketPostsAction());
    } else {
      dispatch(getMarketTypePostsAction({ keyword, area }));
    }
  }, [keyword, area]);

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
      <MarketFilter
        keyword={keyword}
        area={area}
        onSearchMarketGoods={onSearchMarketGoods}
        onClickFilterArea={onClickFilterArea}
        onClickFilterKeyword={onClickFilterKeyword}
      />
      <div className="goods-cards">
        {marketPosts?.map((v: IMarketPost, i: number) => {
          return <GoodsCard key={i} marketPost={v} />;
        })}
      </div>
    </MarketWrapper>
  );
};

export default MarketLayout;
