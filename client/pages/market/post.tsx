import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import MarketPostingEditor from "@components/MarketPostingEditor";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import CommonTitle from "@components/Common/CommonTitle";

export const PostWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const post: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <PostWrapper>
      <CommonTitle title="マーケット" subtitle="グッズ投稿" />
      <MarketPostingEditor />
    </PostWrapper>
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
      return {
        props: {},
      };
    }
);
export default post;
