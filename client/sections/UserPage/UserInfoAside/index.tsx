import React, { useCallback, useEffect, useState } from "react";
import { UserInfoAsideWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { Divider } from "antd";
import router, { useRouter } from "next/router";
import { IFollow, IUserInfo } from "@typings/db";
import fetcher from "utils/fetcher";
import useToggle from "@hooks/useToggle";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import useSWR from "swr";
import { userSlice } from "slices/user";
import {
  changeUserInfoAction,
  changeUserPasswordAction,
  deleteUserIconAction,
  followUserAction,
  getUserInfoAction,
  unfollowUserAction,
} from "actions/user";
import IconCropperModal from "@components/Modals/IconCropperModal";
import useInput from "@hooks/useInput";
import Overlay from "@components/Modals/Overlay";
import { mainSlice } from "slices/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import WithdrawalModal from "@components/Modals/WithdrawalModal";
import UserProfile from "./UserProfile";
import UserFollow from "./UserFollow";
import UserPasswordEditForm from "./UserPasswordEditForm";
import { useTranslation } from "react-i18next";

const UserInfoAside = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { data: userInfo, mutate } = useSWR<IUserInfo>(
    `/user/${query?.userId}`,
    fetcher,
    noRevalidate
  );
  const {
    user,
    addUserIconDone,
    deleteUserIconDone,
    changeUserPasswordDone,
    changeUserInfoDone,
    followUserDone,
    unfollowUserDone,
  } = useSelector((state: RootState) => state.user);
  const [isOwner, setIsOwner] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const { onIconCropperModal, onWithdrawalModal } = useSelector((state: RootState) => state.main);
  const [onPasswordChange, onClickPasswordChange, setPasswordChange] = useToggle(false);
  const [onUserProfileEdit, setUserProfileEdit] = useState(false);
  const [userName, onChangeUserName, setUserName] = useInput("");
  const [prevPassword, onChangePrevPassword] = useInput("");
  const [newPassword, onChangeNewPassword] = useInput("");
  const [introduce, onChangeIntroduce, setIntroduce] = useInput("");
  useEffect(() => {
    if (user?.id === userInfo?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, userInfo]);

  useEffect(() => {
    if (user && userInfo) {
      if (user?.followings.find((v: IFollow) => v.followingId === userInfo?.id)) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  }, [user, userInfo]);

  useEffect(() => {
    if (addUserIconDone) {
      toastSuccessMessage(t("message.icon.done"));
      mutate();
      dispatch(userSlice.actions.addUserIconClear());
      dispatch(mainSlice.actions.closeModal());
    }
  }, [addUserIconDone]);

  useEffect(() => {
    if (followUserDone) {
      toastSuccessMessage(t("message.profile.follow"));
      mutate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.followUserClear());
    }
  }, [followUserDone]);

  useEffect(() => {
    if (unfollowUserDone) {
      toastSuccessMessage(t("message.profile.unFollow"));
      mutate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.unfollowUserClear());
    }
  }, [unfollowUserDone]);

  useEffect(() => {
    if (deleteUserIconDone) {
      toastSuccessMessage(t("message.icon.remove"));
      mutate();
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [deleteUserIconDone]);

  useEffect(() => {
    if (changeUserInfoDone) {
      toastSuccessMessage(t("message.profile.editProfile"));
      mutate();
      dispatch(userSlice.actions.addUserIconClear());
      return;
    }
  }, [changeUserInfoDone]);

  useEffect(() => {
    if (changeUserPasswordDone) {
      toastSuccessMessage(t("message.profile.changePassword"));
      router.push("/");
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [changeUserPasswordDone]);

  const onClickUserSetting = useCallback(
    (type: string) => {
      if (!isOwner) {
        toastErrorMessage(t("message.profile.notOwner"));
        return;
      }
      switch (type) {
        case "remove_icon":
          dispatch(deleteUserIconAction());
          break;
        case "user_info":
          dispatch(changeUserInfoAction({ userName, introduce }));
          setUserProfileEdit(false);
          break;
        case "password":
          dispatch(changeUserPasswordAction({ prevPassword, newPassword }));
          break;
        case "withdrawal":
          dispatch(mainSlice.actions.toggleWithdrawalModal());
          break;
        default:
          return;
      }
    },
    [isOwner, userName, introduce, prevPassword, newPassword]
  );

  const onClickFollowBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage(t("message.needToLogin"));
      dispatch(mainSlice.actions.toggleLoginModal());
      return;
    }
    if (!userInfo?.id) {
      toastErrorMessage(t("message.error.noUser"));
      return;
    }
    if (isFollowed) {
      dispatch(unfollowUserAction(userInfo.id));
    } else {
      dispatch(followUserAction(userInfo.id));
    }
  }, [userInfo, user, isFollowed]);

  const onClickUserInfoEditBtn = useCallback(() => {
    setUserProfileEdit((prev) => !prev);
    setUserName(userInfo?.name);
    setIntroduce(userInfo?.introduce);
  }, [userInfo]);

  return (
    <UserInfoAsideWrapper>
      <div className="user-info-aside-inner">
        {userInfo && (
          <UserProfile
            onClickUserSetting={onClickUserSetting}
            onUserProfileEdit={onUserProfileEdit}
            userInfo={userInfo}
            userName={userName}
            onChangeUserName={onChangeUserName}
            introduce={introduce}
            onChangeIntroduce={onChangeIntroduce}
          />
        )}
        <Divider />
        <div className="user-info-aside-main">
          {!onUserProfileEdit && onPasswordChange ? (
            <UserPasswordEditForm
              prevPassword={prevPassword}
              onChangePrevPassword={onChangePrevPassword}
              newPassword={newPassword}
              onChangeNewPassword={onChangeNewPassword}
            />
          ) : (
            userInfo && <UserFollow userInfo={userInfo} />
          )}
          {isOwner && onUserProfileEdit && (
            <div className="submit-btn-wrapper">
              <button onClick={() => onClickUserSetting("user_info")}>
                {t("profile.changeProfileDone")}
              </button>
              <button onClick={() => setUserProfileEdit(false)}>{t("post.cancel")}</button>
            </div>
          )}
          {isOwner && onPasswordChange && (
            <div className="submit-btn-wrapper">
              <button onClick={() => onClickUserSetting("password")}>
                {t("profile.changePasswordDone")}
              </button>
              <button onClick={() => setPasswordChange(false)}>{t("post.cancel")}</button>
            </div>
          )}
          {isOwner && !onUserProfileEdit && !onPasswordChange && (
            <div className="submit-btn-wrapper">
              <button onClick={onClickUserInfoEditBtn}>{t("profile.editPorfile")}</button>
              <button onClick={onClickPasswordChange}>{t("profile.changePassword")}</button>
              <button onClick={() => onClickUserSetting("withdrawal")}>
                {t("profile.withdrawal")}
              </button>
            </div>
          )}
          {!isOwner && (
            <div className="submit-btn-wrapper">
              <button onClick={onClickFollowBtn}>
                <FontAwesomeIcon
                  icon={isFollowed ? faUserMinus : faUserPlus}
                  style={{ marginRight: "0.7rem" }}
                />
                {isFollowed ? t("profile.unFollowUser") : t("profile.followUser")}
              </button>
            </div>
          )}
        </div>
      </div>
      {onIconCropperModal && (
        <>
          <IconCropperModal />
          <Overlay />
        </>
      )}
      {onWithdrawalModal && (
        <>
          <WithdrawalModal />
          <Overlay />
        </>
      )}
    </UserInfoAsideWrapper>
  );
};

export default UserInfoAside;
