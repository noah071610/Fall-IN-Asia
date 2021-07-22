import {
  AlertOutlined,
  EditOutlined,
  PoweroffOutlined,
  RetweetOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { DEFAULT_ICON_URL, noRevalidate, NO_POST_URL, toastSuccessMessage } from "config";
import React, { FC, useCallback, useEffect, useState } from "react";
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
import AutoCompleteSearch from "@components/AutoCompleteForm";
import Link from "next/link";
import { Divider } from "antd";
import { studySlice } from "slices/study";
import router from "next/router";
import { mainSlice } from "slices/main";
import { fanWithdrawalAction, getUserInfoAction, logoutAction } from "actions/user";
import { userSlice } from "slices/user";
import CommonTitle from "@components/Common/CommonTitle";

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
  const onClickAnnouncement = useCallback((clubPostId, marketPostId, studyPostId, club) => {
    if (clubPostId) {
      router.push(`/club/${club}/${clubPostId}`);
      return;
    }
    if (marketPostId) {
      router.push(`/market/${marketPostId}`);
      return;
    }
    if (studyPostId) {
      router.push(`/korean?postId=${studyPostId}`);
      return;
    }
  }, []);
  console.log(announcements);

  return (
    <AnnounceMenuWrapper>
      {announcements?.length > 0 ? (
        announcements.map((v, i) => {
          return (
            <li
              className="announce-list"
              onClick={() =>
                onClickAnnouncement(v.clubPostId, v.marketPostId, v.studyPostId, v.club)
              }
              key={i}
            >
              <span className="category">
                {v.clubPostId ? "クラブ📢" : v.marketPostId ? "マーケット📢" : "スタディー📢"}
              </span>
              <h4>{v.content}</h4>
            </li>
          );
        })
      ) : (
        <li className="no-chat-box">
          <img src={NO_POST_URL} alt="noPost" />
          <h3>
            <span>お知らせ</span>がありません😥
          </h3>
        </li>
      )}
    </AnnounceMenuWrapper>
  );
};

export const ChatMenu: FC<IProps> = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <ChatMenuWrapper>
      {user?.chatToUser?.length > 0 ? (
        user?.chatToUser?.map((v: any) => {
          <li className="chat-list">
            <div className="name-space">
              <img src={v.icon} />
              <span>{v.name}</span>
            </div>
            <div className="recent-message">あら！あれはいいですね！</div>
          </li>;
        })
      ) : (
        <li className="no-chat-box">
          <img src={NO_POST_URL} alt="noPost" />
          <h3>
            <span>チャット</span>がありません😥
          </h3>
        </li>
      )}
    </ChatMenuWrapper>
  );
};

export const FanMenu: FC<IProps> = () => {
  const dispatch = useDispatch();

  const { user, userFanWithdrawalDone, userFanRegisterDone } = useSelector(
    (state: RootState) => state.user
  );
  const [fanClubPostLength, setFanClubPostLength] = useState(0);
  const [fanClubCommentLength, setFanClubCommentLength] = useState(0);
  const { data: groups, error } = useSWR("/group", fetcher, noRevalidate);
  useEffect(() => {
    if (userFanRegisterDone) {
      dispatch(userSlice.actions.userFanRegisterClear());
      dispatch(getUserInfoAction());
    }
  }, [userFanRegisterDone]);
  useEffect(() => {
    if (userFanWithdrawalDone) {
      dispatch(getUserInfoAction());
      dispatch(userSlice.actions.userFanWithdrawalClear());
    }
  }, [userFanWithdrawalDone]);
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

  const onClickWithdrawalFan = useCallback(() => {
    dispatch(fanWithdrawalAction());
  }, []);
  return (
    <FanMenuWrapper>
      {user?.fan ? (
        <div className="fan-desc">
          <img src={user?.fan.fanClub_image} />
          <div>
            <h2>{user?.fan.fanClub_name}</h2>
            <h4>
              <span className="group-name">{user.fan.group_name}</span>クラブポスト :
              <span className="count">{fanClubPostLength}</span>
            </h4>
            <h4>
              <span className="group-name">{user.fan.group_name}</span>クラブコメント :
              <span className="count">{fanClubCommentLength}</span>
            </h4>
            <Link href={`/club/${user.fan.key_name}`}>
              <a>
                <button className="tag">クラブ移動</button>
              </a>
            </Link>
            <button onClick={onClickWithdrawalFan} className="tag">
              ファン変更
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3>ファン登録</h3>
          <AutoCompleteSearch isOnFanRegister={true} groupsData={groups} />
        </>
      )}
    </FanMenuWrapper>
  );
};

export const StudyMenu: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const onClickStudyPost = useCallback((postId: number) => {
    router.push(`/korean?postId=${postId}`);
    dispatch(mainSlice.actions.closeModal());
    dispatch(studySlice.actions.selectStudyPost(postId));
  }, []);
  return (
    <StudyMenuWrapper>
      {user?.participates?.length > 0 ? (
        user?.participates?.map((v: any, i: number) => {
          return (
            <li className="study-list" onClick={() => onClickStudyPost(v.studyPost.id)} key={i}>
              <div className="leaderUser-info">
                <img src={v.studyPost?.leaderUser?.icon} alt="" />
                <div>
                  <h3>{v.studyPost?.leaderUser?.name}</h3>
                  <span className="tag">{v.studyPost?.area}</span>
                  <span className="tag">{v.studyPost?.type}</span>
                </div>
              </div>
              <h3 className="title">{v.studyPost?.title}...</h3>
            </li>
          );
        })
      ) : (
        <li className="no-chat-box">
          <img src={NO_POST_URL} alt="noPost" />
          <h3>とこでも参加してないです。😥</h3>
        </li>
      )}
    </StudyMenuWrapper>
  );
};

export const SettingMenu: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user, logoutDone } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (logoutDone) {
      dispatch(mainSlice.actions.closeModal());
      dispatch(userSlice.actions.logoutClear());
      toastSuccessMessage("ログアウトしました。");
    }
  }, [logoutDone]);
  const onClickLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <SettingMenuWrapper>
      <li onClick={onClickLogout}>
        <PoweroffOutlined />
        ログアウト
      </li>
      <li>
        <EditOutlined />
        個人情報変更
      </li>
      <li>
        <AlertOutlined />
        通報
      </li>
      <li>
        <UserDeleteOutlined />
        脱退
      </li>
    </SettingMenuWrapper>
  );
};
