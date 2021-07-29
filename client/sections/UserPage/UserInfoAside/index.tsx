import React, { FC, useCallback, useEffect, useState } from "react";
import { UserInfoAsideWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import IconCard from "@components/Cards/IconCard";
import { Divider } from "antd";
import router, { useRouter } from "next/router";
import { IUserInfo } from "@typings/db";
import fetcher from "utils/fetcher";
import useToggle from "@hooks/useToggle";
import { DEFAULT_ICON_URL, noRevalidate, toastSuccessMessage } from "config";
import useSWR from "swr";
import { userSlice } from "slices/user";
import { changeUserInfoAction, changeUserPasswordAction, deleteUserIconAction } from "actions/user";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import IconCropperModal from "@components/Modals/IconCropperModal";
import useInput from "@hooks/useInput";
import Overlay from "@components/Modals/Overlay";
import { mainSlice } from "slices/main";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import TextareaAutosize from "react-textarea-autosize";

interface IProps {}

const UserInfoAside: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { data: userInfo, revalidate } = useSWR<IUserInfo>(
    `/user/${query?.userId}`,
    fetcher,
    noRevalidate
  );
  const { user, addUserIconDone, deleteUserIconDone, changeUserPasswordDone, changeUserInfoDone } =
    useSelector((state: RootState) => state.user);
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
    dispatch(deleteUserIconAction());
  }, []);

  const onClickChangeUserInfo = useCallback(() => {
    dispatch(changeUserInfoAction({ userName, introduce }));
    setUserInfoEdit(false);
  }, [userName, introduce]);

  const onClickChangePassword = useCallback(() => {
    dispatch(changeUserPasswordAction({ prevPassword, newPassword }));
  }, [prevPassword, newPassword]);

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
            <div className="social-wrapper">
              <div>
                <IconCard />
              </div>
              <span>장현수님... 이외 7명이 팔로우 중입니다.</span>
            </div>
            <h3>팔로잉</h3>
            <div className="social-wrapper">
              <div>
                <IconCard />
              </div>
              <span>장현수님... 이외 7명이 팔로우 중입니다.</span>
            </div>
          </>
        )}
        {onUserInfoEdit && (
          <div className="btn-wrapper">
            <button className="edit-profile-btn" onClick={onClickChangeUserInfo}>
              프로필 수정 완료
            </button>
            <button className="edit-profile-btn" onClick={() => setUserInfoEdit(false)}>
              취소
            </button>
          </div>
        )}
        {onPasswordChange && (
          <div className="btn-wrapper">
            <button className="edit-profile-btn" onClick={onClickChangePassword}>
              비밀번호 변경 완료
            </button>
            <button onClick={() => setPasswordChange(false)} className="edit-profile-btn">
              취소
            </button>
          </div>
        )}
        {!onUserInfoEdit && !onPasswordChange && (
          <div className="btn-wrapper">
            <button onClick={onClickUserInfoEditBtn} className="edit-profile-btn">
              프로필 수정
            </button>
            <button className="edit-profile-btn" onClick={onClickPasswordChange}>
              비밀번호 변경
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
