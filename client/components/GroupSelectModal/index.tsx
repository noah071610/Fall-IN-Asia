import React, { FC, useState } from "react";
import { GroupSelectModalWrapper } from "./styles";
import GroupCard from "@components/GroupCard";
import { Input } from "antd";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IGroup } from "@typings/db";
import Link from "next/link";
const { Search } = Input;
interface IProps {
  groups: IGroup[];
}

const GroupSelectModal: FC<IProps> = ({ groups }) => {
  return (
    <GroupSelectModalWrapper>
      <div className="group-recommeder">
        {groups?.slice(0, 4).map((v: IGroup, i: number) => (
          <GroupCard isVote={false} name={v.name} image={v.image} group={v.group} key={i} />
        ))}
      </div>
      <div className="group-search">
        <h3>検索</h3>
        <Search />
        <h3>グループ一覧</h3>
        <ul>
          {groups?.map((v: IGroup, i: number) => (
            <Link key={i} href={`/club/${v.group}`}>
              <a>
                <li className="tag">
                  <span>{v.name}</span>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </GroupSelectModalWrapper>
  );
};

export default GroupSelectModal;
