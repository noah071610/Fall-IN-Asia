import React, { FC, useEffect, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate } from "config";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import MainTopArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import { useRouter } from "next/router";
import { ICountry, IMoment } from "@typings/db";
import MainCountryAnnouncement from "@sections/MainPage/MainCountryAnnouncement";

interface IProps {
  initialMoments: IMoment[][];
  initialCountry: ICountry;
}

const index: FC<IProps> = ({ initialMoments, initialCountry }) => {
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const {
    data: moments,
    revalidate: revalidateMoments,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) =>
      `/moment?code=${query?.code || ""}&page=${index + 1}&filter=${filter}&type=${
        query?.type || ""
      }`,
    fetcher,
    {
      initialData: initialMoments,
      ...noRevalidate,
    }
  );
  const { data: country } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher,
    {
      initialData: initialCountry,
      ...noRevalidate,
    }
  );

  return (
    <MainLayout>
      {country && (
        <>
          <h2 className="main-title">{country?.name + " 관련 정보 📢"}</h2>
          <MainCountryAnnouncement country={country} />
        </>
      )}
      <h2 className="main-title">{country?.name + " 인기 연대기"}</h2>
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
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await store.dispatch(getUserInfoAction());
  let initialMoments = await fetcher(`/moment?code=${params?.code}&page=1`);
  initialMoments = [initialMoments];
  const initialCountry = await fetcher(`/country/${params?.code}`);
  return {
    props: { initialMoments, initialCountry },
  };
});

export default index;
