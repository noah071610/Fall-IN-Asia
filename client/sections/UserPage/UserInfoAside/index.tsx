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

const UserInfoAside = () => {
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
      toastSuccessMessage("아이콘을 성공적으로 바꿨습니다!");
      mutate();
      dispatch(userSlice.actions.addUserIconClear());
      dispatch(mainSlice.actions.closeModal());
    }
  }, [addUserIconDone]);

  useEffect(() => {
    if (followUserDone) {
      toastSuccessMessage("이 유저를 팔로우 합니다.");
      mutate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.followUserClear());
    }
  }, [followUserDone]);

  useEffect(() => {
    if (unfollowUserDone) {
      toastSuccessMessage("이 유저를 언팔로우 했습니다.");
      mutate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.unfollowUserClear());
    }
  }, [unfollowUserDone]);

  useEffect(() => {
    if (deleteUserIconDone) {
      toastSuccessMessage("아이콘을 삭제했습니다.");
      mutate();
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [deleteUserIconDone]);

  useEffect(() => {
    if (changeUserInfoDone) {
      toastSuccessMessage("프로필을 성공적으로 수정했습니다.");
      mutate();
      dispatch(userSlice.actions.addUserIconClear());
      return;
    }
  }, [changeUserInfoDone]);

  useEffect(() => {
    if (changeUserPasswordDone) {
      toastSuccessMessage("비밀번호를 성공적으로 수정했습니다. 다시 로그인 해주세요.");
      router.push("/");
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [changeUserPasswordDone]);

  const onClickUserSetting = useCallback(
    (type: string) => {
      if (!isOwner) {
        toastErrorMessage("본인프로필만 변경 가능합니다.");
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
      toastErrorMessage("로그인 후 이용 가능합니다.");
      dispatch(mainSlice.actions.toggleLoginModal());
      return;
    }
    if (!userInfo?.id) {
      toastErrorMessage("유저를 찾을 수 없습니다.");
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
              <button onClick={() => onClickUserSetting("user_info")}>프로필 수정 완료</button>
              <button onClick={() => setUserProfileEdit(false)}>취소</button>
            </div>
          )}
          {isOwner && onPasswordChange && (
            <div className="submit-btn-wrapper">
              <button onClick={() => onClickUserSetting("password")}>비밀번호 변경 완료</button>
              <button onClick={() => setPasswordChange(false)}>취소</button>
            </div>
          )}
          {isOwner && !onUserProfileEdit && !onPasswordChange && (
            <div className="submit-btn-wrapper">
              <button onClick={onClickUserInfoEditBtn}>프로필 수정</button>
              <button onClick={onClickPasswordChange}>비밀번호 변경</button>
              <button onClick={() => onClickUserSetting("withdrawal")}>회원탈퇴</button>
            </div>
          )}
          {!isOwner && (
            <div className="submit-btn-wrapper">
              <button onClick={onClickFollowBtn}>
                <FontAwesomeIcon
                  icon={isFollowed ? faUserMinus : faUserPlus}
                  style={{ marginRight: "0.7rem" }}
                />
                유저 {isFollowed && "언"}팔로우
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
