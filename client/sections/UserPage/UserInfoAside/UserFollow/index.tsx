import { IUserInfo } from "@typings/db";
import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const UserFollowWrapper = styled.div`
  .follow-wrapper {
    ${tw`mb-4`}
    .follow-icon-wrapper {
      ${tw`mb-2 mt-3`}
      img {
        ${tw`w-6 h-6 rounded-full border-solid border border-gray-100 -mr-2`}
      }
    }
    span {
      ${tw`leading-5`}
    }
  }
`;

interface IProps {
  userInfo: IUserInfo;
}

const UserFollow: FC<IProps> = ({ userInfo }) => {
  return (
    <UserFollowWrapper>
      <h3>팔로워</h3>
      <div className="follow-wrapper">
        <div className="follow-icon-wrapper">
          {userInfo?.followers.slice(0, 6).map((v, i) => (
            <img key={i} src={v.follower.icon} alt="follow-icon" />
          ))}
        </div>
        <span>
          {userInfo.followers.length > 0
            ? `${userInfo?.followers[0].follower?.name}님 외 ${
                userInfo?.followers?.length - 1
              }명 팔로우.`
            : "아직 팔로워가 없습니다."}
        </span>
      </div>
      <h3>팔로잉</h3>
      <div className="follow-wrapper">
        <div className="follow-icon-wrapper">
          {userInfo?.followings.slice(0, 6).map((v, i) => (
            <img key={i} src={v.following.icon} alt="follow-icon" />
          ))}
        </div>
        <span>
          {userInfo.followings.length > 0
            ? `${userInfo?.followings[0].following?.name}님 외 ${
                userInfo?.followings?.length - 1
              }명 팔로잉.`
            : "아직 팔로잉이 없습니다."}
        </span>
      </div>
    </UserFollowWrapper>
  );
};

export default memo(UserFollow);
