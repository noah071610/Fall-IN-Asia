import { IGroup, IGroupScore } from "@typings/db";
import Link from "next/link";
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { wrapperCSS } from "./styles";

interface IProps {
  groupData: IGroup;
  isVote?: boolean;
}

const GroupCard: FC<IProps> = ({ groupData, isVote }) => {
  const dispatch = useDispatch();
  const onClickGroupCardInVote = useCallback(() => {
    dispatch(mainSlice.actions.selectGroupForVote(groupData));
  }, []);
  return (
    <>
      {isVote ? (
        <div onClick={onClickGroupCardInVote} css={wrapperCSS(groupData.image)}>
          <div className="mask" />
          <h2>{groupData.group_name}</h2>
        </div>
      ) : (
        <Link href={`/club/${groupData.key_name}`}>
          <a css={wrapperCSS(groupData.image)}>
            <div className="mask" />
            <h2>{groupData.group_name}</h2>
          </a>
        </Link>
      )}
    </>
  );
};

export default memo(GroupCard);
