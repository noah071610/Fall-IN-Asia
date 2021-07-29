import React, { FC, useCallback, useEffect, useState } from "react";
import { UserInfoAsideWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import IconCard from "@components/Cards/IconCard";
import { Divider } from "antd";
import { useRouter } from "next/router";
import { IUserInfo } from "@typings/db";
import fetcher from "utils/fetcher";
import { DEFAULT_ICON_URL, noRevalidate, toastSuccessMessage } from "config";
import useSWR from "swr";
import { userSlice } from "slices/user";
import { deleteUserIconAction } from "actions/user";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import IconCropperModal from "@components/Modals/IconCropperModal";
import Overlay from "@components/Modals/Overlay";
import { mainSlice } from "slices/main";
import { toastConfirmMessage } from "@components/ConfirmToastify";

interface IProps {}

const UserInfoAside: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { data: userInfo, revalidate } = useSWR<IUserInfo>(
    `/user/${query?.userId}`,
    fetcher,
    noRevalidate
  );
  const { user, addUserIconDone, deleteUserIconDone } = useSelector(
    (state: RootState) => state.user
  );
  const { onIconCropperModal } = useSelector((state: RootState) => state.main);
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

  const onClickConfirm = useCallback(() => {
    dispatch(deleteUserIconAction());
  }, []);

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
          <h2 className="user-name">
            {userInfo?.name}
            <EditOutlined className="edit-icon" />
          </h2>
          <p className="user-introduce">{userInfo?.introduce}</p>
        </div>
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
        <button className="edit-profile-btn">회원 정보 수정</button>
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
