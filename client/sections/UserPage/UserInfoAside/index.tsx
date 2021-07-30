import React, { FC, useCallback, useEffect, useState } from "react";
import { UserInfoAsideWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import IconCard from "@components/Cards/IconCard";
import { Divider } from "antd";
import router, { useRouter } from "next/router";
import { IFollow, IUserInfo } from "@typings/db";
import fetcher from "utils/fetcher";
import useToggle from "@hooks/useToggle";
import { DEFAULT_ICON_URL, noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
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
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import IconCropperModal from "@components/Modals/IconCropperModal";
import useInput from "@hooks/useInput";
import Overlay from "@components/Modals/Overlay";
import { mainSlice } from "slices/main";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const UserInfoAside: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const {
    data: userInfo,
    revalidate,
    mutate,
  } = useSWR<IUserInfo>(`/user/${query?.userId}`, fetcher, noRevalidate);
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
  console.log(user);

  const { onIconCropperModal } = useSelector((state: RootState) => state.main);
  const [onPasswordChange, onClickPasswordChange, setPasswordChange] = useToggle(false);
  const [onUserInfoEdit, setUserInfoEdit] = useState(false);
  const [userName, onChangeUserName, setUserName] = useInput("");
  const [prevPassword, onChangePrevPassword, setPrevPassword] = useInput("");
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput("");
  const [introduce, onChangeIntroduce, setIntroduce] = useInput("");

  const onClickUserInfoEditBtn = useCallback(() => {
    setUserInfoEdit((prev) => !prev);
    setUserName(userInfo?.name);
    setIntroduce(userInfo?.introduce);
  }, [userInfo]);

  useEffect(() => {
    if (addUserIconDone) {
      toastSuccessMessage("아이콘을 성공적으로 바꿨습니다!");
      revalidate();
      dispatch(userSlice.actions.addUserIconClear());
      dispatch(mainSlice.actions.closeModal());
    }
  }, [addUserIconDone]);

  useEffect(() => {
    if (followUserDone) {
      toastSuccessMessage("이 유저를 팔로우 합니다.");
      revalidate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.followUserClear());
    }
  }, [followUserDone]);

  useEffect(() => {
    if (unfollowUserDone) {
      toastSuccessMessage("이 유저를 언팔로우 했습니다.");
      revalidate();
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.unfollowUserClear());
    }
  }, [unfollowUserDone]);

  useEffect(() => {
    if (deleteUserIconDone) {
      toastSuccessMessage("아이콘을 삭제했습니다.");
      revalidate();
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [deleteUserIconDone]);

  useEffect(() => {
    if (changeUserInfoDone) {
      toastSuccessMessage("프로필을 성공적으로 수정했습니다.");
      revalidate();
      dispatch(userSlice.actions.addUserIconClear());
    }
  }, [changeUserInfoDone]);

  useEffect(() => {
    if (changeUserPasswordDone) {
      toastSuccessMessage("비밀번호를 성공적으로 수정했습니다. 다시 로그인 해주세요.");
      router.push("/");
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [changeUserPasswordDone]);

  const onClickConfirm = useCallback(() => {
    if (!isOwner) {
      toastErrorMessage("본인프로필만 변경 가능합니다.");
      return;
    }
    dispatch(deleteUserIconAction());
  }, []);

  const onClickChangeUserInfo = useCallback(() => {
    if (!isOwner) {
      toastErrorMessage("본인프로필만 변경 가능합니다.");
      return;
    }
    dispatch(changeUserInfoAction({ userName, introduce }));
    setUserInfoEdit(false);
  }, [userName, introduce]);

  const onClickChangePassword = useCallback(() => {
    if (!isOwner) {
      toastErrorMessage("본인프로필만 변경 가능합니다.");
      return;
    }
    dispatch(changeUserPasswordAction({ prevPassword, newPassword }));
  }, [prevPassword, newPassword]);

  const onClickFollowBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인 후 이용 가능합니다.");
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

  return (
    <UserInfoAsideWrapper>
      <aside className="user-info-aside">
        <div className="icon-wrapper">
          <div className="icon">
            <img src={userInfo?.icon} alt="icon-image" />
            <div
              onClick={
                userInfo?.icon === DEFAULT_ICON_URL
                  ? () => dispatch(mainSlice.actions.toggleIconCropperModal())
                  : () =>
                      toastConfirmMessage(
                        onClickConfirm,
                        "정말 아이콘을 삭제하시겠어요?",
                        "삭제해주세요."
                      )
              }
              className="icon-changer"
            >
              {userInfo?.icon === DEFAULT_ICON_URL ? <PlusOutlined /> : <DeleteOutlined />}
            </div>
          </div>
        </div>
        <div className="user-intro-wrapper">
          {onUserInfoEdit ? (
            <>
              <h4 className="edit-title">이름</h4>
              <input
                className="edit-input"
                value={userName}
                onChange={onChangeUserName}
                type="text"
              />
              <h4 className="edit-title">자기소개</h4>
              <TextareaAutosize
                className="edit-textarea"
                value={introduce}
                onChange={onChangeIntroduce}
              />
            </>
          ) : (
            <>
              <h2 className="user-name">{userInfo?.name}</h2>
              <p className="user-introduce">{userInfo?.introduce}</p>
            </>
          )}
        </div>
        {!onUserInfoEdit && onPasswordChange ? (
          <>
            <Divider />
            <div className="password-edit-wrapper">
              <h4 className="edit-title">이전 비밀번호</h4>
              <input
                className="edit-input"
                value={prevPassword}
                onChange={onChangePrevPassword}
                type="password"
              />
              <h4 className="edit-title">새로운 비밀번호</h4>
              <input
                className="edit-input"
                value={newPassword}
                onChange={onChangeNewPassword}
                type="password"
              />
            </div>
          </>
        ) : (
          <>
            <Divider />
            <h3>팔로워</h3>
            {userInfo && (
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
            )}
            <h3>팔로잉</h3>
            {userInfo && (
              <div className="follow-wrapper">
                <div className="follow-icon-wrapper">
                  {userInfo?.followings.slice(0, 6).map((v, i) => (
                    <img key={i} src={v.following.icon} alt="follow-icon" />
                  ))}
                </div>
                <span>
                  {" "}
                  {userInfo.followings.length > 0
                    ? `${userInfo?.followings[0].following?.name}님 외 ${
                        userInfo?.followings?.length - 1
                      }명 팔로잉.`
                    : "아직 팔로잉이 없습니다."}
                </span>
              </div>
            )}
          </>
        )}
        {isOwner && onUserInfoEdit && (
          <div className="btn-wrapper">
            <button onClick={onClickChangeUserInfo}>프로필 수정 완료</button>
            <button onClick={() => setUserInfoEdit(false)}>취소</button>
          </div>
        )}
        {isOwner && onPasswordChange && (
          <div className="btn-wrapper">
            <button onClick={onClickChangePassword}>비밀번호 변경 완료</button>
            <button onClick={() => setPasswordChange(false)}>취소</button>
          </div>
        )}
        {isOwner && !onUserInfoEdit && !onPasswordChange && (
          <div className="btn-wrapper">
            <button onClick={onClickUserInfoEditBtn}>프로필 수정</button>
            <button onClick={onClickPasswordChange}>비밀번호 변경</button>
          </div>
        )}
        {!isOwner && (
          <div className="btn-wrapper">
            <button onClick={onClickFollowBtn}>
              <FontAwesomeIcon
                icon={isFollowed ? faUserMinus : faUserPlus}
                style={{ marginRight: "0.7rem" }}
              />
              유저 {isFollowed && "언"}팔로우
            </button>
          </div>
        )}
      </aside>
      {onIconCropperModal && (
        <>
          <IconCropperModal />
          <Overlay />
        </>
      )}
    </UserInfoAsideWrapper>
  );
};

export default UserInfoAside;
