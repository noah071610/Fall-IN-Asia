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
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const CountryRouteMap = dynamic(() => import("@components/Maps/CountryRouteMap"));

interface IProps {
  initialUserInfo: IUserInfo;
}

const UserInfoMainPage: FC<IProps> = ({ initialUserInfo }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [noticePage, setNoticePage] = useState(5);
  const [isOwner, setIsOwner] = useState(false);
  const [storyPageNumber, setStoryPageNumber] = useState(6);
  const [momentPageNumber, setMomentPageNumber] = useState(5);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: userInfo, mutate: revalidateUserInfo } = useSWR<IUserInfo>(
    `/user/${query?.userId}`,
    fetcher,
    {
      fallbackData: initialUserInfo,
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
        <title>
          {userInfo?.name}
          {t("profile.preposition")} {t("profile.profile")} | Fall In Asia
        </title>
        <meta
          name="description"
          content={`${userInfo?.name}${t("profile.preposition")} ${t("profile.profile")} - ${
            userInfo?.introduce
          } | 여행 관광 투어 아시아여행 일본 대만 태국 베트남`}
        />
        <meta
          property="og:title"
          content={`${userInfo?.name}${t("profile.preposition")} ${t("profile.profile")} - ${
            userInfo?.introduce
          } | Fall IN Asia`}
        />
        <meta
          property="og:description"
          content={`${userInfo?.name}${t("profile.preposition")} ${t("profile.profile")} - ${
            userInfo?.introduce
          } | 여행 관광 투어 아시아여행 일본 대만 태국 베트남`}
        />
        <meta property="og:image" content={userInfo?.icon} />
        <meta property="og:url" content={`https://fallinasia.com/me/${userInfo?.id}`} />
      </Head>
      <UserInfoLayout>
        {isOwner && userInfo && userInfo?.notices.length > 0 ? (
          <>
            <h2 className="main-title">{t("popup.notice.notice")}</h2>
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
                  <span>{t("main.more")}</span>
                  <PlusCircleOutlined />
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="main-title">{t("popup.notice.noNotice")}</h2>
            <p className="no-notice-wrapper">{t("popup.notice.noNoticeDesc")}</p>
          </>
        )}
        <h2 className="main-title">
          {userInfo?.name}
          {t("profile.preposition")}
          {t("profile.storyMap")}
        </h2>
        <div className="route-map-wrapper">
          <CountryRouteMap stories={userInfo?.stories || []} />
        </div>
        <h2 className="main-title">{t("profile.countryList")}</h2>
        {userInfo && userInfo?.stories.length > 0 ? (
          <VisitedCountryList stories={userInfo?.stories} />
        ) : (
          <h4 className="no-countries">{t("profile.noCountryList")}</h4>
        )}
        <h2 className="main-title">
          {userInfo?.name}
          {t("profile.preposition")}
          {t("main.story")} {userInfo?.stories?.length || 0}
          {t("profile.count")}
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
            <img src={NO_POST_URL} alt="no-post" />
            <h4>{t("main.noStory")}</h4>
          </div>
        )}

        <h2 className="main-title">
          {userInfo?.name}
          {t("profile.preposition")}
          {t("main.moment")} {userInfo?.moments?.length || 0}
          {t("profile.count")}
        </h2>
        {userInfo && userInfo?.moments.length > 0 ? (
          <ul className="moment-list">
            {userInfo?.moments?.slice(0, momentPageNumber).map((v, i) => (
              <ListCard
                onClickListCard={() => router.push(`/country/${v.code}/${v.id}`)}
                key={i}
                title={`${t(`country.${v.country.name}`)}/${t(`nav.${v.type}`)}/${v.id}${t(
                  "profile.number"
                )}${t("main.moment")}`}
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
            <img src={NO_POST_URL} alt="no-post" />
            <h4>{t("main.noMoment")}</h4>
          </div>
        )}
      </UserInfoLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params, locale }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      const initialUserInfo = await fetcher(`/user/${params?.userId}`);
      return {
        props: { initialUserInfo, ...(await serverSideTranslations(locale as string, ["common"])) },
      };
    }
);

export default UserInfoMainPage;
