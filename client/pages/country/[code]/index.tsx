import React, { FC, useEffect, useRef, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import MainTopArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import { momentSlice } from "slices/moment";
import router, { useRouter } from "next/router";
import { ICountry, IMoment } from "@typings/db";
import MainCountryAnnouncement from "@sections/MainPage/MainCountryAnnouncement";

interface IProps {
  initialMoments: IMoment[][];
  initialCountry: ICountry;
}

const index: FC<IProps> = ({ initialMoments, initialCountry }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const {
    data: moments,
    revalidate,
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
  const { momentCreateDone, momentLikeDone, momentDislikeDone, momentDeleteDone } = useSelector(
    (state: RootState) => state.moment
  );
  useEffect(() => {
    if (momentCreateDone) {
      toastSuccessMessage("모멘트를 성공적으로 작성했습니다.");
      dispatch(momentSlice.actions.momentCreateClear());
      revalidate();
    }
  }, [momentCreateDone]);
  useEffect(() => {
    if (momentDeleteDone) {
      toastSuccessMessage("모멘트를 성공적으로 삭제했습니다.");
      dispatch(momentSlice.actions.momentDeleteClear());
      revalidate();
    }
  }, [momentDeleteDone]);
  useEffect(() => {
    if (momentLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(momentSlice.actions.momentLikeClear());
      dispatch(getUserInfoAction());
      revalidate();
    }
  }, [momentLikeDone]);

  useEffect(() => {
    if (momentDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(momentSlice.actions.momentDislikeClear());
      dispatch(getUserInfoAction());
      revalidate();
    }
  }, [momentDislikeDone]);
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
      <MomentList filter={filter} setFilter={setFilter} setSize={setSize} moments={moments} />
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
