import { IUser } from "@typings/db";
import React, { FC, memo, useCallback, useState } from "react";
import dayjs from "dayjs";
import { DEFAULT_ICON_URL, FLEX_STYLE, RGB_BLACK } from "config";
import styled from "@emotion/styled";
import tw from "twin.macro";
import router from "next/router";

export const NameSpaceWrapper = styled.div`
  ${FLEX_STYLE("flex-start", "center")};
  .icon {
    ${tw`cursor-pointer mr-3 hover:opacity-70`};
    img {
      ${tw`w-10 h-10 rounded-full`};
    }
  }
  p {
    ${tw`mt-2`}
    font-size:0.83rem;
  }
  span {
    display: block;
  }
  .name {
    ${tw`text-sm hover:font-bold cursor-pointer font-bold`}
  }
  .date {
    padding-top: 0.2rem;
    color: ${RGB_BLACK(0.3)};
  }
`;

interface IProps {
  user: IUser;
  date: Date;
  comment?: string;
}
// .follow-btn{
//   ${tw`ml-1`}
//   ${FLEX_STYLE("center", "center")};
//   .follow-icon{
//     font-size:1rem;
//   }
//   span{
//     ${tw`ml-1 text-xs`}
//   }
// }
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
        <img src={user?.icon ? user?.icon : DEFAULT_ICON_URL} alt="" />
      </div>
      <div className="user-info">
        <span onClick={onClickGotoProfile} className="name">
          {user?.name}
        </span>
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
