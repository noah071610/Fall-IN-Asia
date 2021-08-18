import React, { FC, useEffect, useState } from "react";
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

const index = () => {
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const {
    data: moments,
    revalidate: revalidateMoments,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) => `/moment?page=${index + 1}&filter=${filter}&type=${query?.type || ""}`,
    fetcher,
    noRevalidate
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

export default index;
