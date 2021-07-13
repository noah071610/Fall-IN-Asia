import React, { FC, useState } from "react";
import { UserInfoModalWrapper } from "./styles";
import {
  ProfileOutlined,
  ShopOutlined,
  NotificationOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { RootState } from "slices";
import { useDispatch, useSelector } from "react-redux";
import { BLUE_COLOR, DEFAULT_ICON_URL, WHITE_COLOR } from "config";
import { AnnounceMenu, ChatMenu, FanMenu, SettingMenu, StudyMenu } from "./UserMenuList";
import { mainSlice } from "slices/main";
interface IProps {}

const UserInfoModal: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { onAnnounceMenu, onChatMenu, onFanMenu, onStudyMenu, onSettingMenu } = useSelector(
    (state: RootState) => state.main
  );
  return (
    <UserInfoModalWrapper>
      <div className="info-top">
        <div className="icon">
          <img src={user.icon} alt={user.name + "_icon"} />
        </div>
        <div className="info-desc">
          <h3>{user.name} 様</h3>
          <h4>{user.email}</h4>
          <ul>
            <li>
              ファン :
              {user?.fan ? <span>{user?.fan}</span> : <button className="tag">ファン登録</button>}
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
            <button onClick={() => dispatch(mainSlice.actions.showAnnounceMenu())}>お知らせ</button>
          </li>
          <li className={onChatMenu ? "active" : ""}>
            <button onClick={() => dispatch(mainSlice.actions.showChatMenu())}>チャット</button>
          </li>
          <li className={onFanMenu ? "active" : ""}>
            <button onClick={() => dispatch(mainSlice.actions.showFanMenu())}>ファン</button>
          </li>
          <li className={onStudyMenu ? "active" : ""}>
            <button onClick={() => dispatch(mainSlice.actions.showStudyMenu())}>参加俱楽部</button>
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
    </UserInfoModalWrapper>
  );
};

export default UserInfoModal;
