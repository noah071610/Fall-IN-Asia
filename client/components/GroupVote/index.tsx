import React, { FC, memo, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { RootState } from "slices";
import { useDispatch, useSelector } from "react-redux";
import router from "next/router";
import { raderSettings, toastErrorMessage, voteStyleList } from "config";
import { GroupVoteWrapper } from "./styles";
import { ResponsiveRadar } from "@nivo/radar";
import { IGroup, IGroupScore } from "@typings/db";
import { mainSlice } from "slices/main";
import { groupVoteForStyleAction } from "actions/group";

interface IProps {
  groupsData: IGroupScore[];
  isOnVotePage?: Boolean;
}

const GroupVote: FC<IProps> = ({ isOnVotePage, groupsData }) => {
  const dispatch = useDispatch();
  const { selectedGroup } = useSelector((state: RootState) => state.main);
  const { user } = useSelector((state: RootState) => state.user);
  const onClickVoteStyleBtn = useCallback(
    (style) => {
      if (!user) {
        toastErrorMessage("ログインしてからご利用できます。");
        return;
      }
      let form: any = {
        style,
        groupId: selectedGroup.id,
      };
      dispatch(groupVoteForStyleAction(form));
    },
    [selectedGroup, user]
  );

  const chartData = (selectedGroup: IGroupScore) => [
    {
      taste: "実力派",
      トタル: selectedGroup?.talented || 0,
    },
    {
      taste: "カッコいい",
      トタル: selectedGroup?.handsome || 0,
    },
    {
      taste: "綺麗",
      トタル: selectedGroup?.pretty || 0,
    },
    {
      taste: "可愛い",
      トタル: selectedGroup?.cute || 0,
    },
    {
      taste: "お洒落",
      トタル: selectedGroup?.beautiful || 0,
    },
  ];
  return (
    <GroupVoteWrapper>
      {!isOnVotePage && (
        <ul className="vote-list">
          {groupsData?.slice(0, 4).map((v, i) => {
            return (
              <li key={i} onClick={() => dispatch(mainSlice.actions.selectGroupForVote(v))}>
                <a>{v.group_name}</a>
              </li>
            );
          })}
          <Link href="/vote">
            <a>
              <li>もっと見る</li>
            </a>
          </Link>
        </ul>
      )}
      <div className="vote-content">
        <div className="vote-poster">
          <img src={selectedGroup?.image} alt={selectedGroup?.group_name} />
          <div>
            <h2>
              <span>{selectedGroup?.group_name[0]}</span>
              {selectedGroup?.group_name.slice(1)}
            </h2>
            <button
              onClick={() => {
                router.push(`/club/${selectedGroup.key_name}`);
              }}
              className="basic-btn"
            >
              クラブに行く
            </button>
          </div>
        </div>
        <div>
          <h3>このグループはどんな感じ？</h3>
          <div className="vote-rader">
            <ResponsiveRadar data={chartData(selectedGroup)} {...raderSettings} />
          </div>
          <ul className="vote-tag-list">
            {voteStyleList?.map((v, i) => {
              return (
                <li key={i}>
                  <button onClick={() => onClickVoteStyleBtn(v.eng)} className="basic-btn">
                    {v.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </GroupVoteWrapper>
  );
};

export default memo(GroupVote);
