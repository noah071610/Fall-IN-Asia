import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { IUserInfo } from "@typings/db";
import { DEFAULT_ICON_URL } from "config";
import React, { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { mainSlice } from "slices/main";
import { UserProfileWrapper } from "./styles";
import TextareaAutosize from "react-textarea-autosize";

interface IProps {
  userInfo: IUserInfo;
  onUserProfileEdit: boolean;
  onClickUserSetting: (type: string) => void;
  userName: string;
  introduce: string;
  onChangeUserName: () => void;
  onChangeIntroduce: () => void;
}

const UserProfile: FC<IProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <UserProfileWrapper>
      <div className="icon-wrapper">
        <div className="icon">
          <img src={props.userInfo?.icon} alt="icon-image" />
          <div
            onClick={
              props.userInfo?.icon === DEFAULT_ICON_URL
                ? () => dispatch(mainSlice.actions.toggleIconCropperModal())
                : () =>
                    toastConfirmMessage(
                      () => props.onClickUserSetting("remove_icon"),
                      "정말 아이콘을 삭제하시겠어요?",
                      "삭제해주세요."
                    )
            }
            className="icon-change-btn"
          >
            {props.userInfo?.icon === DEFAULT_ICON_URL ? <PlusOutlined /> : <DeleteOutlined />}
          </div>
        </div>
      </div>
      <div className="profile-container">
        {props.onUserProfileEdit ? (
          <>
            <h4 className="edit-title">이름</h4>
            <input
              className="edit-input"
              value={props.userName}
              onChange={props.onChangeUserName}
              type="text"
            />
            <h4 className="edit-title">자기소개</h4>
            <TextareaAutosize
              className="edit-textarea"
              value={props.introduce}
              onChange={props.onChangeIntroduce}
            />
          </>
        ) : (
          <>
            <h2 className="user-name">{props.userInfo?.name}</h2>
            <p className="user-introduce">{props.userInfo?.introduce}</p>
          </>
        )}
      </div>
    </UserProfileWrapper>
  );
};

export default memo(UserProfile);
