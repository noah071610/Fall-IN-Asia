import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import GroupSelectModal from "@components/GroupSelectModal";
import { GRID_STYLE } from "config";
import { Divider } from "antd";
import GruopPreview from "@components/GruopPreview";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";

export const ClubMainWrapper = styled.div`
  padding: 2rem;
  .club-previews {
    padding: 1rem;
    ${GRID_STYLE("1rem", "repeat(2,1fr)")};
  }
`;

interface IProps {}

const index: FC<IProps> = () => {
  return (
    <ClubMainWrapper>
      <CommonTitle title="ファンクラブ" subtitle="仲間と会える空間" />
      <div className="margin-div" />
      <GroupSelectModal />
      <Divider />
      <div className="club-previews">
        <GruopPreview />
        <GruopPreview />
        <GruopPreview />
      </div>
    </ClubMainWrapper>
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

export default index;
