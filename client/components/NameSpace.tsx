import { IUser } from "@typings/db";
import React, { FC, memo, useCallback } from "react";
import { DEFAULT_ICON_URL, FLEX_STYLE, RGB_BLACK } from "config";
import styled from "@emotion/styled";
import tw from "twin.macro";
import router from "next/router";
import dateCalculator from "utils/dateCalculator";

export const NameSpaceWrapper = styled.div`
  ${FLEX_STYLE("flex-start", "center")};
  ${tw`cursor-pointer`}
  &:hover {
    p {
      ${tw`underline`}
    }
  }
  .icon {
    ${tw`relative cursor-pointer mr-3`};
    img {
      ${tw`w-10 h-10 rounded-full`};
    }
    .goto-profile-popup {
      ${tw`absolute py-1 px-2 -left-5 -top-8 bg-gray-500 rounded shadow-lg hidden text-center text-xs font-bold text-white`}
      white-space: nowrap;
    }
    &:hover {
      img {
        ${tw`opacity-30`};
      }
      .goto-profile-popup {
        ${tw`block`}
      }
    }
  }
  p {
    ${tw`mt-2`}
    font-size:0.83rem;
  }
  span {
    display: inline-block;
  }
  .name-title {
    ${tw`text-sm`}
    ${FLEX_STYLE("flex-start", "center")};
    .comment-date {
      margin-left: 0.6rem;
      color: ${RGB_BLACK(0.3)};
      font-size: 0.75rem;
    }
  }
  .date {
    padding-top: 0.2rem;
    font-size: 0.7rem;
    color: ${RGB_BLACK(0.3)};
  }
`;

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
