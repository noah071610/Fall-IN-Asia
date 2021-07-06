import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import GroupSelectModal from "@components/GroupSelectModal";
import { GRID_STYLE, noRevalidate, toastErrorMessage } from "config";
import { Divider } from "antd";
import GruopPreview from "@components/GruopPreview";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IClubPost, ITopClubPost, ITopClubPosts } from "@typings/db";

export const ClubMainWrapper = styled.div`
  padding: 2rem;
  .club-previews {
    padding: 1rem;
    ${GRID_STYLE("1rem", "repeat(2,1fr)")};
  }
`;

interface IProps {}

const index: FC<IProps> = () => {
  const { data: groups, error } = useSWR("/group", fetcher);
  const { data: topClubPostLists } = useSWR("/club/preview", fetcher, noRevalidate);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }

  return (
    <ClubMainWrapper>
      <CommonTitle title="ファンクラブ" subtitle="仲間と会える空間" />
      <div className="margin-div" />
      <GroupSelectModal groups={groups} />
      <Divider />
      <div className="club-previews">
        {topClubPostLists?.map((v: ITopClubPosts, i: number) => {
          return (
            <GruopPreview key={i} groupName={v.group_name} keyName={v.key_name} posts={v.posts} />
          );
        })}
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
