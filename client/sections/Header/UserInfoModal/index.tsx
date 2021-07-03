import React, { FC, useState } from "react";
import { UserInfoModalWrapper } from "./styles";
import {
  ProfileOutlined,
  ShopOutlined,
  NotificationOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { RootState } from "slices";
import { useSelector } from "react-redux";
interface IProps {}

const UserInfoModal: FC<IProps> = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [state, setstate] = useState();
  return (
    <UserInfoModalWrapper>
      <div className="info-top">
        <div className="icon">
          <img src={user.icon} alt={user.name + "_icon"} />
        </div>
        <div className="interface">
          <h3>{user.name}様</h3>
          <h4>{user.email}</h4>
          <ul>
            <li>
              クラブ :<span> 5</span>
            </li>
            <li>
              マーケット :<span>5</span>
            </li>
            <li>
              チャット :<span>5</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="announcement">
        <img src="https://img.icons8.com/cotton/64/000000/commercial--v1.png" />
        <h3>お知らせ</h3>
      </div>
      <ul className="announce-list">
        <li>
          <span className="category">レッスン</span> 新しいレッスンの申込です！
        </li>
        <li>
          <span className="category">レッスン</span> 新しいレッスンの申込です！
        </li>
        <li>
          <span className="category">レッスン</span> 新しいレッスンの申込です！
        </li>
        <li>
          <span className="category">レッスン</span> 新しいレッスンの申込です！
        </li>
      </ul>
    </UserInfoModalWrapper>
  );
};

export default UserInfoModal;
