import React, { FC, useEffect, useState } from "react";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import MomentList from "@sections/MainPage/MomentList";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import MommentPost from "@sections/MainPage/MomentPost";
import MainLayout from "@layout/MainLayout";
import MainTopArticleSlide from "@sections/MainPage/MainPopularArticleSlide";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { momentSlice } from "slices/moment";
import { commentSlice } from "slices/comment";
import { ICountry, IMoment } from "@typings/db";

interface IProps {
  initialMoments: IMoment[][];
  initialMoment: IMoment;
  initialCountry: ICountry;
}

const index: FC<IProps> = ({ initialMoments, initialCountry, initialMoment }) => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [ip, setIP] = useState("");
  const [filter, setFilter] = useState("");
  const { data: moment, revalidate: revalidateMoment } = useSWR<IMoment>(
    `/moment/${query?.code}/${query?.momentId}/${ip}`,
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
      }`,
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

  const getClientIp = async () => {
    await fetch("https://jsonip.com", { mode: "cors" })
      .then((resp) => resp.json())
      .then((ip) => {
        localStorage.setItem("client_ip", ip.ip.replaceAll(".", "").slice(3));
        setIP(ip.ip.replaceAll(".", "").slice(3));
      })
      .catch(() => {
        setIP("00000000");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("client_ip")) {
      setIP(JSON.parse(localStorage.getItem("client_ip")!));
    } else {
      getClientIp();
    }
  }, []);

  const {
    momentCreateDone,
    momentEditConfirmDone,
    momentDeleteDone,
    momentDislikeDone,
    momentLikeDone,
  } = useSelector((state: RootState) => state.moment);
  const {
    commentCreateDone,
    commentDeleteDone,
    subCommentCreateDone,
    subCommentDeleteDone,
    commentLikeDone,
    commentDislikeDone,
  } = useSelector((state: RootState) => state.comment);

  useEffect(() => {
    if (momentCreateDone) {
      toastSuccessMessage("모멘트를 성공적으로 작성했습니다.");
      dispatch(momentSlice.actions.momentCreateClear());
      revalidateMoments();
    }
  }, [momentCreateDone]);

  useEffect(() => {
    if (momentEditConfirmDone) {
      router.push(`/club/${query?.group}/edit`);
    }
  }, [momentEditConfirmDone]);

  useEffect(() => {
    if (momentDeleteDone) {
      toastSuccessMessage("모멘트를 삭제했습니다.");
      dispatch(momentSlice.actions.momentDeleteClear());
    }
  }, [momentDeleteDone]);

  useEffect(() => {
    if (commentCreateDone) {
      toastSuccessMessage("댓글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.commentCreateClear());
      revalidateMoment();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("댓글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.commentDeleteClear());
      revalidateMoment();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (subCommentCreateDone) {
      toastSuccessMessage("답글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.subCommentCreateClear());
      revalidateMoment();
    }
  }, [subCommentCreateDone]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.subCommentDeleteClear());
      revalidateMoment();
    }
  }, [subCommentDeleteDone]);

  useEffect(() => {
    if (momentLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(momentSlice.actions.momentLikeClear());
      dispatch(getUserInfoAction());
      revalidateMoments();
      revalidateMoment();
    }
  }, [momentLikeDone]);

  useEffect(() => {
    if (momentDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(momentSlice.actions.momentDislikeClear());
      dispatch(getUserInfoAction());
      revalidateMoments();
      revalidateMoment();
    }
  }, [momentDislikeDone]);

  useEffect(() => {
    if (commentLikeDone) {
      toastSuccessMessage("댓글 좋아요!💓");
      dispatch(commentSlice.actions.commentLikeClear());
      dispatch(getUserInfoAction());
      revalidateMoments();
      revalidateMoment();
    }
  }, [commentLikeDone]);

  useEffect(() => {
    if (commentDislikeDone) {
      toastSuccessMessage("댓글 좋아요 취소💔");
      dispatch(commentSlice.actions.commentDislikeClear());
      dispatch(getUserInfoAction());
      revalidateMoments();
      revalidateMoment();
    }
  }, [commentDislikeDone]);
  return (
    <MainLayout>
      {moment && <MommentPost moment={moment} />}
      <h2 className="main-title">{country?.name} 인기 연대기</h2>
      <MainTopArticleSlide country={country} />
      <h2 className="main-title">포스팅</h2>
      <MomentPostingForm />
      <MomentList filter={filter} setFilter={setFilter} setSize={setSize} moments={moments} />
    </MainLayout>
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
      const initialMoment = await fetcher(`/moment/${params?.code}/${params?.momentId}/0`);
      let initialMoments = await fetcher(`/moment?code=${params?.code}&page=1`);
      initialMoments = [initialMoments];
      const initialCountry = await fetcher(`/country/${params?.code}`);
      return {
        props: { initialMoment, initialMoments, initialCountry },
      };
    }
);

export default index;
