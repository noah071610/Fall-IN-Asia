import React, { FC, useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";
import { BORDER_THICK, GRID_STYLE, noRevalidate, RGB_BLACK, toastErrorMessage } from "config";
import GroupCard from "@components/Cards/GroupCard";
import { Divider, Input } from "antd";
import ClubPreview from "@components/ClubPreview";
import { wrapper } from "configureStore";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import Link from "next/link";
import { IGroup, ITopClubPosts } from "@typings/db";
import { AutoComplete } from "antd";
import router from "next/router";
import AutoCompleteSearch from "@components/AutoCompleteSearch";

export const ClubMainWrapper = styled.div`
  .club-filter {
    padding: 1rem;
    ${GRID_STYLE("2rem", "2fr 2fr")};
    .club-recommeder {
      padding: 0.5rem;
      ${BORDER_THICK("border")};
      ${GRID_STYLE("0.5rem", "repeat(2,1fr)")};
    }
    .club-search {
      h3 {
        margin: 1rem 0;
      }
      h3:first-of-type {
        margin-top: 0;
      }
      ul {
        padding: 1rem;
        ${BORDER_THICK("border-top")};
        ${BORDER_THICK("border-bottom")};
        background-color: ${RGB_BLACK(0.03)};
      }
    }
  }
  padding: 2rem;
  .club-previews {
    padding: 1rem;
    ${GRID_STYLE("1rem", "repeat(2,1fr)")};
  }
  .autoComplete-wrapper {
    img {
      width: 10%;
    }
  }
`;

interface IProps {}

const index: FC<IProps> = () => {
  const { data: groups, error } = useSWR("/group", fetcher, noRevalidate);
  const { data: topClubPostLists } = useSWR("/club/preview", fetcher, noRevalidate);

  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }

  return (
    <ClubMainWrapper>
      <CommonTitle title="ファンクラブ" subtitle="仲間と会える空間" />
      <div className="margin-div" />
      <div className="club-filter">
        <div className="club-recommeder">
          {groups?.slice(0, 4).map((v: IGroup, i: number) => (
            <GroupCard isVote={false} groupData={v} key={i} />
          ))}
        </div>
        <div className="club-search">
          <h3>グループ検索</h3>
          <AutoCompleteSearch groupsData={groups} />
          <h3>グループ一覧</h3>
          <ul>
            {groups?.map((v: IGroup, i: number) => (
              <Link key={i} href={`/club/${v.key_name}`}>
                <a>
                  <li className="tag">
                    <span>{v.group_name}</span>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Divider />
      <div className="club-previews">
        {topClubPostLists?.map((v: ITopClubPosts, i: number) => {
          return (
            <ClubPreview key={i} groupName={v.group_name} keyName={v.key_name} posts={v.posts} />
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
