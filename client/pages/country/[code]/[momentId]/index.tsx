import React, { FC, useState } from "react";
import { wrapper } from "configureStore";
import { getUserCookieWithServerSide, noRevalidate, WORLD_IMAGE } from "config";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import MommentPost from "@sections/MainPage/MomentPost";
import MainLayout from "@layout/MainLayout";
import MainTopArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import fetcher from "utils/fetcher";
import { useRouter } from "next/router";
import { ICountry, IMoment } from "@typings/db";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import html2textConverter from "utils/html2textConverter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

interface IProps {
  initialMoments: IMoment[][];
  initialMoment: IMoment;
  initialCountry: ICountry;
}

const MomentPostPage: FC<IProps> = ({ initialMoments, initialCountry, initialMoment }) => {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const { data: moment, mutate: revalidateMoment } = useSWR<IMoment>(
    `/moment/${query?.code}/${query?.momentId}`,
    fetcher,
    {
      fallbackData: initialMoment,
      ...noRevalidate,
    }
  );
  const { data: moments, setSize } = useSWRInfinite<IMoment[]>(
    (index) =>
      `/moment?code=${query?.code || ""}&page=${index + 1}&filter=${filter}&type=${
        query?.type || ""
      }&momentId=${query?.momentId}`,
    fetcher,
    {
      fallbackData: initialMoments,
      ...noRevalidate,
    }
  );
  const { data: country } = useSWR<ICountry>(`/country/${query?.code}`, fetcher, {
    fallbackData: initialCountry,
    ...noRevalidate,
  });

  return (
    <>
      <Head>
        <title>
          {html2textConverter(moment?.content).slice(0, 20)}... - {moment?.country?.name}/
          {moment?.id}
          {t("post.counting") + t("nav.moment")} | Fall IN Asia
        </title>
        <meta name="description" content={html2textConverter(moment?.content).slice(0, 100)} />
        <meta
          property="og:title"
          content={`${html2textConverter(moment?.content).slice(0, 20)}... - ${
            moment?.country?.name
          }/
          ${moment?.id}${t("post.counting") + t("nav.moment")} | Fall IN Asia`}
        />
        <meta
          property="og:description"
          content={html2textConverter(moment?.content).slice(0, 100)}
        />
        <meta
          property="og:image"
          content={moment?.images.length! > 0 ? moment?.images[0].image_src : WORLD_IMAGE}
        />
        <meta
          property="og:url"
          content={`https://fallinasia.com/country/${moment?.code}/${moment?.id}`}
        />
      </Head>
      <MainLayout>
        {moment && <MommentPost revalidateMoment={revalidateMoment} moment={moment} />}
        <h2 className="main-title">{t("main.popularStory")}</h2>
        <MainTopArticleSlide country={country} />
        <h2 className="main-title">{t("main.moment")}</h2>
        <MomentPostingForm />
        <MomentList filter={filter} setFilter={setFilter} setSize={setSize} moments={moments} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params, locale }: GetServerSidePropsContext) => {
      getUserCookieWithServerSide(req, store);
      const initialMoment = await fetcher(
        `/moment/${params?.code}/${params?.momentId}?viewCount=true`
      );
      let initialMoments = await fetcher(
        `/moment?code=${params?.code}&momentId=${params?.momentId}&page=1`
      );
      initialMoments = [initialMoments];
      const initialCountry = await fetcher(`/country/${params?.code}`);
      return {
        props: {
          initialMoment,
          initialMoments,
          initialCountry,
          ...(await serverSideTranslations(locale as string, ["common"])),
        },
      };
    }
);

export default MomentPostPage;
