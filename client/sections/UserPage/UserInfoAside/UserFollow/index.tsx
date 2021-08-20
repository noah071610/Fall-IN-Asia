import { IUserInfo } from "@typings/db";
import React, { FC, memo } from "react";
import { UserFollowWrapper } from "./styles";

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
