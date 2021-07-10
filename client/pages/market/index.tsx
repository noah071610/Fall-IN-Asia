import React, { FC, useEffect } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import MarketLayout from "@sections/MarketLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastSuccessMessage } from "config";
import { marketSlice } from "slices/market";

interface Props {}

const index: FC<Props> = () => {
  const dispatch = useDispatch();
  const { marketPostCreateDone, marketPostDeleteDone } = useSelector(
    (state: RootState) => state.market
  );
  useEffect(() => {
    if (marketPostCreateDone) {
      toastSuccessMessage("ポストを成功的に投稿致しました😊");
      dispatch(marketSlice.actions.marketPostCreateClear());
    }
  }, [marketPostCreateDone]);
  useEffect(() => {
    if (marketPostDeleteDone) {
      toastSuccessMessage("ポストを成功的に削除しました");
      dispatch(marketSlice.actions.marketPostDeleteClear());
    }
  }, [marketPostDeleteDone]);

  return <MarketLayout />;
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
      return {
        props: {},
      };
    }
);

export default index;
