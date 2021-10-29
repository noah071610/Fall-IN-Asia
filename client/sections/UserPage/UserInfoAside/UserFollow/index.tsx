import { IUserInfo } from "@typings/db";
import React, { FC, memo } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import shortid from "shortid";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");
  return (
    <UserFollowWrapper>
      <h3>{t("profile.follow")}</h3>
      <div className="follow-wrapper">
        <div className="follow-icon-wrapper">
          {userInfo?.followers.slice(0, 6).map((v) => (
            <img key={shortid.generate()} src={v.follower.icon} alt="followers-icon" />
          ))}
        </div>
        <span>
          {userInfo.followers.length > 0
            ? `${userInfo?.followers[0].follower?.name}${t("profile.or")} ${
                userInfo?.followers?.length - 1
              }${t("profile.people")} ${t("profile.follow")}.`
            : t("profile.noFollower")}
        </span>
      </div>
      <h3>{t("profile.following")}</h3>
      <div className="follow-wrapper">
        <div className="follow-icon-wrapper">
          {userInfo?.followings.slice(0, 6).map((v) => (
            <img key={shortid.generate()} src={v.following.icon} alt="followings-icon" />
          ))}
        </div>
        <span>
          {userInfo.followings.length > 0
            ? `${userInfo?.followings[0].follower?.name}${t("profile.or")} ${
                userInfo?.followings?.length - 1
              }${t("profile.people")} ${t("profile.following")}.`
            : t("profile.noFollowing")}
        </span>
      </div>
    </UserFollowWrapper>
  );
};

export default memo(UserFollow);
