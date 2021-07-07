import React, { FC } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import MarketLayout from "@sections/MarketLayout";

interface Props {}

const index: FC<Props> = () => {
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
