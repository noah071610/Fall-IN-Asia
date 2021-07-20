import { IUser } from "@typings/db";
import React, { FC, useState } from "react";
import dayjs from "dayjs";
import { NameSpaceWrapper } from "./styles";

interface IProps {
  user: IUser;
  date: Date;
  comment?: string;
}

const NameSpace: FC<IProps> = ({ user, date, comment }) => {
  return (
    <NameSpaceWrapper>
      <div className="icon">
        <img src={user?.icon} alt="" />
      </div>
      <div className="user-info">
        <span className="name">{user?.name}</span>
        {comment ? (
          <p>{comment}</p>
        ) : (
          <span className="date">{dayjs(date).format("YYYY/MM/DD")}</span>
        )}
      </div>
    </NameSpaceWrapper>
  );
};

export default NameSpace;
