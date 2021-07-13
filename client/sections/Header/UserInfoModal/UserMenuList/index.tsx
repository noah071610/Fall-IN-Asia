import { AlertOutlined, EditOutlined, PoweroffOutlined, RetweetOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL } from "config";
import React, { FC, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import {
  AnnounceMenuWrapper,
  ChatMenuWrapper,
  FanMenuWrapper,
  StudyMenuWrapper,
  SettingMenuWrapper,
} from "./styles";

interface IProps {}

export const AnnounceMenu: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <AnnounceMenuWrapper>
      <li>
        <span className="category">レッスン</span> 新しいレッスンの申込です
      </li>
      <li>
        <span className="category">レッスン</span> 新しいレッスンの申込です
      </li>
    </AnnounceMenuWrapper>
  );
};

export const ChatMenu: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ChatMenuWrapper>
      <li>
        <div className="name-space">
          <img src={DEFAULT_ICON_URL} />
          <span>長谷川拓也</span>
        </div>
        <div className="recent-message">あら！あれはいいですね！</div>
      </li>
      <li>
        <div className="name-space">
          <img src={DEFAULT_ICON_URL} />
          <span>長谷川拓也</span>
        </div>
        <div className="recent-message">あら！あれはいいですね！</div>
      </li>
    </ChatMenuWrapper>
  );
};

export const FanMenu: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <FanMenuWrapper>
      <img src="https://w.namu.la/s/22604da874e610bf4e43bc86a621ac33be87ae51904b5810b7f15ebb85e758d7c50371d35a9481ff2e62f3b99db21a7d2a269ff3ac3c5f09d6eb452184cfdbaf488efd304c4a37925b219b458810f5ddb41d418b0e029dce8890c5f3047feeb9" />
      <div>
        <h2>
          ONCE <button className="tag">ファンクラブ移動</button>
        </h2>
        <h4>
          <span className="group-name">トワイス</span>クラブポスト :
          <span className="count"> 0</span>
        </h4>
        <h4>
          <span className="group-name">トワイス</span>クラブコメント :
          <span className="count"> 0</span>
        </h4>
      </div>
    </FanMenuWrapper>
  );
};

export const StudyMenu: FC<IProps> = () => {
  const { data: studyPosts, error, revalidate } = useSWR(`/study`, fetcher);
  return (
    <StudyMenuWrapper>
      <li>
        {studyPosts && (
          <>
            <div className="leaderUser-info">
              <img src={studyPosts[0]?.leaderUser.icon} alt="" />
              <div>
                <h3>{studyPosts[0]?.leaderUser.name}</h3>
                <h4>{studyPosts[0]?.area}</h4>
                <h4>{studyPosts[0]?.type}</h4>
              </div>
            </div>
            <h3 className="title">{studyPosts[0]?.title} 잘부탁드려요 저희는...</h3>
          </>
        )}
      </li>
    </StudyMenuWrapper>
  );
};

export const SettingMenu: FC<IProps> = () => {
  return (
    <SettingMenuWrapper>
      <li>
        <EditOutlined />
        名前変更
      </li>
      <li>
        <RetweetOutlined />
        パスワード変更
      </li>
      <li>
        <AlertOutlined />
        通報
      </li>
      <li>
        <PoweroffOutlined />
        脱退
      </li>
    </SettingMenuWrapper>
  );
};
