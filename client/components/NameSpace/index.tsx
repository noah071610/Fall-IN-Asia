import React, { FC, memo, useCallback } from "react";
import { IUser } from "@typings/db";
import { DEFAULT_ICON_URL } from "config";
import router from "next/router";
import dateCalculator from "utils/dateCalculator";
import { NameSpaceWrapper } from "./styles";

interface IProps {
  user: IUser;
  date: Date;
  comment?: string;
}

const NameSpace: FC<IProps> = ({ user, date, comment }) => {
  const onClickGotoProfile = useCallback(
    (e) => {
      e.stopPropagation();
      router.push(`/me/${user.id}`);
    },
    [user]
  );
  return (
    <NameSpaceWrapper className="name-space-wrapper">
      <div onClick={onClickGotoProfile} className="icon">
        <img src={user?.icon ? user?.icon : DEFAULT_ICON_URL} alt="user-icon" />
        <span className="goto-profile-popup">프로필 보기</span>
      </div>
      <div className="user-info">
        <div className="name-title">
          <span className="name">{user?.name}</span>
          {comment && <span className="comment-date">{dateCalculator(date)}</span>}
        </div>
        {comment ? <p>{comment}</p> : <span className="date">{dateCalculator(date)}</span>}
      </div>
    </NameSpaceWrapper>
  );
};

export default memo(NameSpace);
