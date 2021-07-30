import React, { useEffect, useRef, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import MainLayout from "@layout/MainLayout";
import MainTopContent from "@sections/MainPage/MainTopArticleSlide";
import { momentSlice } from "slices/moment";
import router, { useRouter } from "next/router";
import { ICountry, IMoment } from "@typings/db";

const index = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const {
    data: moments,
    size,
    revalidate,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) =>
      `/moment?code=${query?.code || ""}&page=${index + 1}&filter=${filter}&type=${
        query?.type || ""
      }`,
    fetcher
  );
  const { data: country, error } = useSWR<ICountry>(
    query?.code ? `/country/${query?.code}` : null,
    fetcher,
    noRevalidate
  );
  if (error) {
    router.push("/");
  }
  const { momentCreateDone, momentLikeDone, momentDislikeDone, momentDeleteDone } = useSelector(
    (state: RootState) => state.moment
  );
  useEffect(() => {
    if (momentCreateDone) {
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
      dispatch(momentSlice.actions.momentCreateClear());
      revalidate();
    }
  }, [momentCreateDone]);
  useEffect(() => {
    if (momentDeleteDone) {
      toastSuccessMessage("게시물을 성공적으로 삭제했습니다.");
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
      <h2 className="main-title">{country?.name + "에서 인기폭발 🥰"}</h2>
      <div />
      <h2 className="main-title">{country?.name + " 인기 연대기"}</h2>
      <MainTopContent />
      <h2 className="main-title">포스팅</h2>
      <MomentPostingForm />
      <MomentList setFilter={setFilter} setSize={setSize} moments={moments} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : "";
      axios.defaults.headers.Cookie = "";
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      await store.dispatch(getUserInfoAction());
      return {
        props: {},
      };
    }
);

export default index;
