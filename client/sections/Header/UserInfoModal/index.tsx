import React, { FC, useCallback, useEffect, useState } from "react";
import { UserInfoModalWrapper } from "./styles";
import {
  ProfileOutlined,
  ShopOutlined,
  NotificationOutlined,
  CommentOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { RootState } from "slices";
import { useDispatch, useSelector } from "react-redux";
import { BLUE_COLOR, DEFAULT_ICON_URL, toastErrorMessage, WHITE_COLOR } from "config";
import { AnnounceMenu, ChatMenu, FanMenu, SettingMenu, StudyMenu } from "./UserMenuList";
import { mainSlice } from "slices/main";
import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars";
import ImageCropper from "@components/PostingEditor/ImageCropper";
import { Button } from "antd";
import { addUserIconAction, deleteUserIconAction, getUserInfoAction } from "actions/user";
import useToggle from "@hooks/useToggle";
import CommonTitle from "@components/Common/CommonTitle";
import { userSlice } from "slices/user";
interface IProps {}

const UserInfoModal: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [blob, setBlob] = useState<Blob | null>(null);
  const { user, addUserIconDone, deleteUserIconDone } = useSelector(
    (state: RootState) => state.user
  );
  const [onIconCropper, onChangeIconCropper, setIconCropper] = useToggle(false);
  const { onAnnounceMenu, onChatMenu, onFanMenu, onStudyMenu, onSettingMenu } = useSelector(
    (state: RootState) => state.main
  );
  const onClickSubmit = useCallback(() => {
    if (!blob) {
      toastErrorMessage("アイコンを選んでください。");
      return;
    }
    if (!user) {
      toastErrorMessage("ログインしてください。");
      return;
    }
    const form = new FormData();
    form.append("image", blob);
    dispatch(addUserIconAction(form));
    setIconCropper(false);
  }, [blob, user]);
  useEffect(() => {
    if (addUserIconDone) {
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.addUserIconClear());
    }
  }, [addUserIconDone]);
  useEffect(() => {
    if (deleteUserIconDone) {
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.deleteUserIconClear());
    }
  }, [deleteUserIconDone]);
  return (
    <UserInfoModalWrapper style={onIconCropper ? { width: "80%" } : {}}>
      {!onIconCropper && (
        <>
          <div className="info-top">
            <div className="icon">
              <img src={user.icon} alt={user.name + "_icon"} />
              <div
                onClick={
                  user?.icon === DEFAULT_ICON_URL
                    ? onChangeIconCropper
                    : () => dispatch(deleteUserIconAction())
                }
                className="add-icon"
              >
                {user?.icon === DEFAULT_ICON_URL ? <PlusOutlined /> : <DeleteOutlined />}
              </div>
            </div>
            <div className="info-desc">
              <h3>{user.name} 様</h3>
              <h4>{user.email}</h4>
              <ul>
                <li>
                  ファン :
                  {user?.fan ? (
                    <Link href={`/club/${user.fan.key_name}`}>
                      <a>
                        <span>{user?.fan?.group_name}</span>
                      </a>
                    </Link>
                  ) : (
                    <button
                      onClick={() => dispatch(mainSlice.actions.showFanMenu())}
                      className="tag"
                    >
                      ファン登録
                    </button>
                  )}
                </li>
                <li>
                  クラブポスト :<span> {user?.clubPosts?.length}</span>
                </li>
                <li>
                  マーケットポスト :<span> {user?.marketPosts?.length}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-bottom">
            <ul className="info-bottom-menu">
              <li className={onAnnounceMenu ? "active" : ""}>
                <button onClick={() => dispatch(mainSlice.actions.showAnnounceMenu())}>
                  お知らせ
                </button>
              </li>
              <li className={onChatMenu ? "active" : ""}>
                <button onClick={() => dispatch(mainSlice.actions.showChatMenu())}>チャット</button>
              </li>
              <li className={onFanMenu ? "active" : ""}>
                <button onClick={() => dispatch(mainSlice.actions.showFanMenu())}>ファン</button>
              </li>
              <li className={onStudyMenu ? "active" : ""}>
                <button onClick={() => dispatch(mainSlice.actions.showStudyMenu())}>
                  参加俱楽部
                </button>
              </li>
              <li className={onSettingMenu ? "active" : ""}>
                <button onClick={() => dispatch(mainSlice.actions.showSettingMenu())}>設定</button>
              </li>
            </ul>
            <div className="info-bottom-desc">
              {onAnnounceMenu && <AnnounceMenu />}
              {onChatMenu && <ChatMenu />}
              {onFanMenu && <FanMenu />}
              {onStudyMenu && <StudyMenu />}
              {onSettingMenu && <SettingMenu />}
            </div>
          </div>
        </>
      )}
      {onIconCropper && (
        <div className="icon-cropper">
          <CommonTitle title="アイコン変更" />
          <ImageCropper isIconModal={true} setBlob={setBlob} />
          <div className="submit-btn-wrapper">
            <Button onClick={onChangeIconCropper}>メニュー</Button>
            <Button onClick={onClickSubmit} type="primary">
              アイコン変更
            </Button>
          </div>
        </div>
      )}
    </UserInfoModalWrapper>
  );
};

export default UserInfoModal;
