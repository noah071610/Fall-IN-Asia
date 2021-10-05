import React, { FC, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate } from "config";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import { useRouter } from "next/router";
import { IMoment } from "@typings/db";
import CountryList from "@components/CountryPreviewSlide";
import MainPopularArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";

interface IProps {
  initialMoments: IMoment[][];
}

const MomentMainPage: FC<IProps> = ({ initialMoments }) => {
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const {
    data: moments,
    revalidate: revalidateMoments,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) => `/moment?page=${index + 1}&filter=${filter}&type=${query?.type || ""}`,
    fetcher,
    {
      initialData: initialMoments,
      ...noRevalidate,
    }
  );

  return (
    <>
      <Head>
        <title>Fall IN Asia</title>
      </Head>
      <MainLayout>
        <h2 className="main-title">인기 여행지</h2>
        <CountryList slidesPerView={3.2} isMain={true} />
        <h2 className="main-title">인기 연대기</h2>
        <MainPopularArticleSlide />
        <h2 className="main-title">포스팅</h2>
        <MomentPostingForm />
        <MomentList
          revalidateMoments={revalidateMoments}
          filter={filter}
          setFilter={setFilter}
          setSize={setSize}
          moments={moments}
        />
      </MainLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }: GetServerSidePropsContext) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      let initialMoments = await fetcher(`/moment?page=1`);
      initialMoments = [initialMoments];
      return {
        props: { initialMoments },
      };
    }
);

export default MomentMainPage;
