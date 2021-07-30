import React, { useEffect, useState } from "react";
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
import MainTopContent from "@sections/MainPage/MainTopArticleSlide";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import router, { useRouter } from "next/router";
import { momentSlice } from "slices/moment";
import { commentSlice } from "slices/comment";
import { IMoment } from "@typings/db";

const index = () => {
  const dispatch = useDispatch();
  const [ip, setIP] = useState("");
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const { data: moment, revalidate: revalidateMoment } = useSWR(
    ip ? `/moment/${query?.code}/${query?.momentId}/${ip}` : null,
    fetcher,
    noRevalidate
  );
  const {
    data: moments,
    size,
    revalidate: revalidateMoments,
    setSize,
  } = useSWRInfinite<IMoment[]>(
    (index) =>
      `/moment?code=${query?.code || ""}&page=${index + 1}&filter=${filter}&type=${
        query?.type || ""
      }`,
    fetcher
  );

  const getClientIp = async () => {
    await fetch("https://jsonip.com", { mode: "cors" })
      .then((resp) => resp.json())
      .then((ip) => {
        setIP(ip.ip.replaceAll(".", ""));
      })
      .catch(() => {
        setIP("00000000");
      });
  };

  useEffect(() => {
    getClientIp();
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
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
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
      toastSuccessMessage("게시글을 삭제했습니다.");
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
      <h2 className="main-title">15번째 메아리</h2>
      <MommentPost moment={moment} />
      <h2 className="main-title">인기급상승</h2>
      <MainTopContent />
      <h2 className="main-title">포스팅</h2>
      <MomentPostingForm />
      <MomentList filter={filter} setFilter={setFilter} setSize={setSize} moments={moments} />
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
