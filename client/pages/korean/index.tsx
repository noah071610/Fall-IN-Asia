import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { wrapper } from "configureStore";
import axios from "axios";
import RecruitCard from "@components/Cards/RecruitCard/RecruitCardMain";
import { getUserInfoAction } from "actions/user";
import CommonTitle from "@components/Common/CommonTitle";
import KoreanAsideMenu from "@sections/KoreanPage/KoreanAsideMenu/KoreanAsideMenu";
import { BORDER_THIN, FLEX_STYLE, toastErrorMessage, toastSuccessMessage } from "config";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { IStudyPost } from "@typings/db";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { studySlice } from "slices/study";

const KoreanPageWrapper = styled.div`
  padding: 2rem;
  .korean-main {
    ${FLEX_STYLE("flex-start", "flex-start")};
    padding: 2rem 1rem;
    ${BORDER_THIN("border")};
    .korean-card-wrapper {
      width: 80%;
      padding-left: 2rem;
    }
  }
`;

interface Props {}

const korean: FC<Props> = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const { data: studyPosts, error, revalidate } = useSWR(`/study/${encodeURI(type)}`, fetcher);
  const { user } = useSelector((state: RootState) => state.user);
  const { studyPostDeleteDone } = useSelector((state: RootState) => state.study);

  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }

  useEffect(() => {
    if (studyPostDeleteDone) {
      toastSuccessMessage("募集を成功的に削除致しました。");
      dispatch(studySlice.actions.studyPostDeleteClear());
      revalidate();
    }
  }, [studyPostDeleteDone]);

  const onClickKoreanPostBtn = useCallback(() => {
    router.push("/korean/post");
  }, []);
  return (
    <KoreanPageWrapper>
      <CommonTitle title="韓国語レッスン" subtitle="レッスンや交流会探し">
        {user && (
          <button onClick={onClickKoreanPostBtn} className="basic-btn">
            募集掲示投稿
          </button>
        )}
      </CommonTitle>
      <div className="korean-main">
        <KoreanAsideMenu setType={setType} />
        <div className="korean-card-wrapper">
          {studyPosts?.map((v: IStudyPost, i: number) => {
            return <RecruitCard studyPost={v} key={i} />;
          })}
        </div>
      </div>
    </KoreanPageWrapper>
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

export default korean;
