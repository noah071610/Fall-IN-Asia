import { AlertOutlined, EditOutlined, PoweroffOutlined, RetweetOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL, noRevalidate, NO_POST_URL } from "config";
import React, { FC, useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import {
  AnnounceMenuWrapper,
  ChatMenuWrapper,
  FanMenuWrapper,
  StudyMenuWrapper,
  SettingMenuWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import dayjs from "dayjs";
import GroupCard from "@components/Cards/GroupCard";
import { IClubPost, IGroup } from "@typings/db";
import AutoCompleteSearch from "@components/AutoCompleteSearch";
import Link from "next/link";

interface IProps {}

export const AnnounceMenu: FC<IProps> = () => {
  const dispatch = useDispatch();
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user) {
      console.log(user);

      const marketPostsAnnouncements =
        user?.marketPosts.length > 0
          ? user?.marketPosts?.map((v: any) => {
              return v.announcements;
            })
          : [];
      const clubPostsAnnouncements =
        user?.clubPosts.length > 0
          ? user?.clubPosts?.map((v: any) => {
              return v.announcements;
            })
          : [];
      const studyPostsAnnouncements =
        user?.studyPosts.length > 0
          ? user?.studyPosts?.map((v: any) => {
              return v.announcements;
            })
          : [];
      const announcements = marketPostsAnnouncements
        .concat(clubPostsAnnouncements)
        .concat(studyPostsAnnouncements);
      setAnnouncements(
        announcements
          .map((v: any) => {
            return v[0];
          })
          ?.sort((a: any, b: any) => {
            return dayjs(b.updatedAt).format("MDDHHmmss") - dayjs(a.updatedAt).format("MDDHHmmss");
          })
      );
    }
  }, []);
  console.log(announcements);

  return (
    <AnnounceMenuWrapper>
      {announcements?.map((v, i) => {
        return (
          <li key={i}>
            <span className="category">
              {v.clubPostId ? "クラブ" : v.marketPostId ? "マーケット" : "スタディー"}
            </span>{" "}
            {v.content}
          </li>
        );
      })}
    </AnnounceMenuWrapper>
  );
};

export const ChatMenu: FC<IProps> = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <ChatMenuWrapper>
      {user?.chatToUser?.map((v: any) => {
        <li>
          <div className="name-space">
            <img src={v.icon} />
            <span>{v.name}</span>
          </div>
          <div className="recent-message">あら！あれはいいですね！</div>
        </li>;
      })}
    </ChatMenuWrapper>
  );
};

export const FanMenu: FC<IProps> = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [fanClubPostLength, setFanClubPostLength] = useState(0);
  const [fanClubCommentLength, setFanClubCommentLength] = useState(0);
  const { data: groups, error } = useSWR("/group", fetcher, noRevalidate);
  useEffect(() => {
    if (user?.fan) {
      const postForFanGroup = user.clubPosts.filter(
        (v: any) => v.key_name === user.fan.key_name
      ).length;
      const commentForFanGroup = user.comments.filter(
        (v: any) => v.post.key_name === user.fan.key_name
      ).length;
      setFanClubPostLength(postForFanGroup);
      setFanClubCommentLength(commentForFanGroup);
    }
  }, [user]);

  return (
    <FanMenuWrapper>
      {user?.fan ? (
        <>
          <img src={user?.fan.fanClub_image} />
          <div>
            <h2>
              {user?.fan.fanClub_name}
              <Link href={`/club/${user.fan.key_name}`}>
                <a>
                  <button className="tag">ファンクラブ移動</button>
                </a>
              </Link>
            </h2>
            <h4>
              <span className="group-name">{user.fan.group_name}</span>クラブポスト :
              <span className="count">{fanClubPostLength}</span>
            </h4>
            <h4>
              <span className="group-name">{user.fan.group_name}</span>クラブコメント :
              <span className="count">{fanClubCommentLength}</span>
            </h4>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ marginBottom: "1rem" }}>ファンのクラブを検索して登録しましょう😍。</h3>
          <AutoCompleteSearch isOnFanRegister={true} groupsData={groups} />
        </>
      )}
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
