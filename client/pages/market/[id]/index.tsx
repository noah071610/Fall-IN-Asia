import React, { FC, useEffect } from "react";
import MarketLayout from "@sections/MarketLayout";
import MarketPostSection from "@sections/MarketPage/MarketPostSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import router from "next/router";
import { toastSuccessMessage } from "config";
import { marketSlice } from "slices/story";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { getMarketPostsAction } from "actions/story";
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { marketPostDeleteDone } = useSelector((state: RootState) => state.market);
  useEffect(() => {
    if (marketPostDeleteDone) {
      router.push(`/market`);
      toastSuccessMessage("ポストを成功的に削除しました");
      dispatch(marketSlice.actions.marketPostDeleteClear());
    }
  }, [marketPostDeleteDone]);
  return (
    <MarketLayout>
      <MarketPostSection />
    </MarketLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      await store.dispatch(getMarketPostsAction());
      return {
        props: {},
      };
    }
);

export default index;
