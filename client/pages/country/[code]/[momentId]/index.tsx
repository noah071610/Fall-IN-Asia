import React, { FC, useEffect, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate } from "config";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import MommentPost from "@sections/MainPage/MomentPost";
import MainLayout from "@layout/MainLayout";
import MainTopArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import { useRouter } from "next/router";
import { ICountry, IMoment } from "@typings/db";
import Head from "next/head";

interface IProps {
  initialMoments: IMoment[][];
  initialMoment: IMoment;
  initialCountry: ICountry;
}

const index: FC<IProps> = ({ initialMoments, initialCountry, initialMoment }) => {
  const { query } = useRouter();
  const [uuid, setUUID] = useState("");
  const [filter, setFilter] = useState("");
  const { data: moment, revalidate: revalidateMoment } = useSWR<IMoment>(
    `/moment/${query?.code}/${query?.momentId}?uuid=${uuid}`,
    fetcher,
    {
      initialData: initialMoment,
      ...noRevalidate,
    }
  );
  const {
    data: moments,
    revalidate: revalidateMoments,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) =>
      `/moment?code=${query?.code || ""}&page=${index + 1}&filter=${filter}&type=${
        query?.type || ""
      }&momentId=${query?.momentId}`,
    fetcher,
    {
      initialData: initialMoments,
      ...noRevalidate,
    }
  );
  const { data: country } = useSWR<ICountry>(`/country/${query?.code}`, fetcher, {
    initialData: initialCountry,
    ...noRevalidate,
  });

  useEffect(() => {
    if (localStorage.getItem("client_identifier")) {
      setUUID(localStorage.getItem("client_identifier")!);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          {moment?.country?.name}/{moment?.id}번모멘트 - Fall IN Asia
        </title>
      </Head>
      <MainLayout>
        {moment && <MommentPost revalidateMoment={revalidateMoment} moment={moment} />}
        <h2 className="main-title">{country?.name} 인기 연대기</h2>
        <MainTopArticleSlide country={country} />
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
    async ({ req, res, params }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      const initialMoment = await fetcher(`/moment/${params?.code}/${params?.momentId}`);
      let initialMoments = await fetcher(
        `/moment?code=${params?.code}&momentId=${params?.momentId}&page=1`
      );
      initialMoments = [initialMoments];
      const initialCountry = await fetcher(`/country/${params?.code}`);
      return {
        props: { initialMoment, initialMoments, initialCountry },
      };
    }
);

export default index;
