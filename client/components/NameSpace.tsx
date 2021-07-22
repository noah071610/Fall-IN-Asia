import { IUser } from "@typings/db";
import React, { FC, memo, useState } from "react";
import dayjs from "dayjs";
import { FLEX_STYLE, RGB_BLACK } from "config";
import styled from "@emotion/styled";

const NameSpaceWrapper = styled.div` 
  ${FLEX_STYLE("flex-start", "")};
  .icon {
    margin-right:.7rem;
    img {
      width: 2.5rem;
      height 2.5rem;
      border-radius:50%;
    }
  }
  p{
    margin-top:0.5rem;
  }
  span{
    display:block;
  }
  .name{
    font-size:0.75rem;
  }
  .date{
    padding-top:0.3rem;
    color:${RGB_BLACK(0.3)};
  }
`;

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

export default memo(NameSpace);
