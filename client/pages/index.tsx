import React, { FC, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, WORLD_IMAGE } from "config";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import useSWRInfinite from "swr/infinite";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import { useRouter } from "next/router";
import { IMoment } from "@typings/db";
import CountryList from "@components/CountryPreviewSlide";
import MainPopularArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

interface IProps {
  initialMoments: IMoment[][];
}

const MomentMainPage: FC<IProps> = ({ initialMoments }) => {
  const { query } = useRouter();
  const { t } = useTranslation("main");
  const [filter, setFilter] = useState("");
  const { data: moments, setSize } = useSWRInfinite(
    (index) => `/moment?page=${index + 1}&filter=${filter}&type=${query?.type || ""}`,
    fetcher,
    {
      fallbackData: initialMoments,
      ...noRevalidate,
    }
  );

  return (
    <>
      <Head>
        <title>Fall IN Asia</title>
        <meta name="description" content="우리들만의 작은 여행 커뮤니티 FAll IN Asia" />
        <meta property="og:title" content="Fall IN Asia" />
        <meta property="og:description" content="우리들만의 작은 여행 커뮤니티 FAll IN Asia" />
        <meta property="og:image" content={WORLD_IMAGE} />
        <meta property="og:url" content="https://fallinasia.com" />
      </Head>
      <MainLayout>
        <h2 className="main-title">{t("popularCountry")}</h2>
        <CountryList slidesPerView={3.2} isMain={true} />
        <h2 className="main-title">{t("popularStory")}</h2>
        <MainPopularArticleSlide />
        <h2 className="main-title">{t("moment")}</h2>
        <MomentPostingForm />
        <MomentList filter={filter} setFilter={setFilter} setSize={setSize} moments={moments} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, locale }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      if (axios.defaults.headers) {
        axios.defaults.headers.Cookie = "";
        if (req && cookie) {
          axios.defaults.headers.Cookie = cookie;
        }
      }
      await store.dispatch(getUserInfoAction());
      let initialMoments = await fetcher(`/moment?page=1`);
      initialMoments = [initialMoments];
      return {
        props: {
          initialMoments,
          ...(await serverSideTranslations(locale!, ["common", "main", "post"])),
        },
      };
    }
);

export default MomentMainPage;
