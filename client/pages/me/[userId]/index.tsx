import React, { FC, useCallback, useEffect, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import router, { useRouter } from "next/router";
import UserInfoLayout from "@layout/UserInfoLayout";
import VisitedCountryList from "@sections/UserPage/VisitedCountryList";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate, NO_POST_URL } from "config";
import { INotice, IUserInfo } from "@typings/db";
import ListCard from "@components/Cards/ListCard";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import { PlusCircleOutlined } from "@ant-design/icons";
import MoreButton from "@components/MoreButton";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";

const CountryRouteMap = dynamic(() => import("@components/Maps/CountryRouteMap"));

interface IProps {
  initialUserInfo: IUserInfo;
}

const UserInfoMainPage: FC<IProps> = ({ initialUserInfo }) => {
  const { query } = useRouter();
  const [noticePage, setNoticePage] = useState(5);
  const [isOwner, setIsOwner] = useState(false);
  const [storyPageNumber, setStoryPageNumber] = useState(6);
  const [momentPageNumber, setMomentPageNumber] = useState(5);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: userInfo, revalidate: revalidateUserInfo } = useSWR<IUserInfo>(
    `/user/${query?.userId}`,
    fetcher,
    {
      initialData: initialUserInfo,
      ...noRevalidate,
    }
  );
  useEffect(() => {
    if (user?.id === userInfo?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, userInfo]);

  const onClickMoreNotice = useCallback(() => {
    if (userInfo) {
      setNoticePage(userInfo?.notices?.length);
    }
  }, [userInfo]);

  const onClickNoticeList = useCallback((v: INotice) => {
    if (v.momentId) {
      router.push(`/country/${v.code}/${v.momentId}`);
    } else {
      router.push(`/story/${v.code}/${v.storyId}`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{userInfo?.name}님의 프로필 - Fall In Asia</title>
      </Head>
      <UserInfoLayout>
        {isOwner && userInfo && userInfo?.notices.length > 0 ? (
          <>
            <h2 className="main-title">알림</h2>
            <ul className="notice-list">
              {userInfo?.notices?.slice(0, noticePage).map((v: INotice, i) => (
                <ListCard
                  onClickListCard={() => onClickNoticeList(v)}
                  key={i}
                  title={v.header}
                  content={v.content}
                  noticeId={v.id}
                  revalidateUserInfo={revalidateUserInfo}
                />
              ))}
            </ul>
            {userInfo?.notices?.length > 5 && (
              <div className="notice-more-btn">
                <button onClick={onClickMoreNotice}>
                  <span>더보기</span>
                  <PlusCircleOutlined />
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="main-title">알림이 없습니다</h2>
            <p className="no-notice-wrapper">
              유저님이 모멘트,연대기,코멘트 작성 및 수정등 활동을 하면 저희가 알려줄게요!
            </p>
          </>
        )}
        <h2 className="main-title">{userInfo?.name}님의 연대기 지도</h2>
        <div className="route-map-wrapper">
          <CountryRouteMap stories={userInfo?.stories || []} />
        </div>
        <h2 className="main-title">다녀온 국가 리스트</h2>
        {userInfo && userInfo?.stories.length > 0 ? (
          <VisitedCountryList stories={userInfo?.stories} />
        ) : (
          <h4 className="no-countries">
            아직 다녀온 국가가 없어요, 연대기를 작성하면 자동으로 갱신되요.😉
          </h4>
        )}
        <h2 className="main-title">
          {userInfo?.name}님의 작성 연대기 {userInfo?.stories?.length || 0}개
        </h2>
        {userInfo && userInfo?.stories.length > 0 ? (
          <>
            <div className="post-slider">
              {userInfo?.stories?.slice(0, storyPageNumber).map((v, i) => (
                <ArticleColumnCard key={i} story={v} />
              ))}
            </div>
            {userInfo?.stories.length > storyPageNumber && (
              <div className="more-btn-wrapper">
                <MoreButton
                  onClickMoreBtn={() => {
                    setStoryPageNumber((prev) => prev + 6);
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <div className="no-post-wrapper">
            <Image src={NO_POST_URL} alt="no-post" />
            <h4>아직 작성한 연대기가 없습니다.</h4>
          </div>
        )}

        <h2 className="main-title">
          {userInfo?.name}님의 작성 모멘트 {userInfo?.moments?.length || 0}개
        </h2>
        {userInfo && userInfo?.moments.length > 0 ? (
          <ul className="moment-list">
            {userInfo?.moments?.slice(0, momentPageNumber).map((v, i) => (
              <ListCard
                onClickListCard={() => router.push(`/country/${v.code}/${v.id}`)}
                key={i}
                title={`${v.country.name}/${v.type}/${v.id}번째모멘트`}
                content={v.content}
              />
            ))}
            {userInfo?.moments.length > momentPageNumber && (
              <MoreButton
                onClickMoreBtn={() => {
                  setMomentPageNumber((prev) => prev + 5);
                }}
              />
            )}
          </ul>
        ) : (
          <div className="no-post-wrapper">
            <Image src={NO_POST_URL} alt="no-post" />
            <h4>아직 작성한 모멘트가 없습니다.</h4>
          </div>
        )}
      </UserInfoLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      const initialUserInfo = await fetcher(`/user/${params?.userId}`);
      return {
        props: { initialUserInfo },
      };
    }
);

export default UserInfoMainPage;
