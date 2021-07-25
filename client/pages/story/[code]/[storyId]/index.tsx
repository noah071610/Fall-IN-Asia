import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { noRevalidate, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import XLG_Layout from "@layout/XLG_Layout";
import router, { useRouter } from "next/router";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IStory } from "@typings/db";
import { Divider } from "antd";
import StoryPost from "@sections/StoryPage/StoryPost";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { storySlice } from "slices/story";
import { commentSlice } from "slices/comment";
import StoryArticleList from "@sections/StoryPage/StoryArticleList";
import StoryPostThubnail from "@sections/StoryPage/StoryPostThubnail";
import CountryMap from "@components/Maps/CountryMap";

export const StoryPostWrapper = styled.div``;
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const postRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("");
  const { data: story, revalidate: revalidateStory } = useSWR<IStory>(
    `/story/${query?.code}/${query?.storyId}`,
    fetcher,
    noRevalidate
  );
  const {
    data: stories,
    revalidate,
    setSize,
  } = useSWRInfinite<IStory[]>(
    (index) => `/story?page=${index + 1}&filter=${query?.filter || ""}`,
    fetcher,
    noRevalidate
  );
  const { data: country, revalidate: revalidateCountry } = useSWR<ICountry>(
    `/country/${query?.code}`,
    fetcher,
    noRevalidate
  );
  const { user } = useSelector((state: RootState) => state.user);

  const {
    storyCreateDone,
    storyEditConfirmDone,
    storyDeleteDone,
    storyDislikeDone,
    storyLikeDone,
  } = useSelector((state: RootState) => state.story);
  const { commentCreateDone, commentDeleteDone, subCommentCreateDone, subCommentDeleteDone } =
    useSelector((state: RootState) => state.comment);

  useEffect(() => {
    if (storyCreateDone) {
      toastSuccessMessage("게시물을 성공적으로 작성했습니다.");
      dispatch(storySlice.actions.storyCreateClear());
      revalidateStory();
    }
  }, [storyCreateDone]);

  useEffect(() => {
    if (storyEditConfirmDone) {
      router.push(`/club/${query?.group}/edit`);
    }
  }, [storyEditConfirmDone]);

  useEffect(() => {
    if (storyDeleteDone) {
      toastSuccessMessage("게시글을 삭제했습니다.");
      dispatch(storySlice.actions.storyDeleteClear());
    }
  }, [storyDeleteDone]);

  useEffect(() => {
    if (commentCreateDone) {
      toastSuccessMessage("댓글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.commentCreateClear());
      revalidateStory();
    }
  }, [commentCreateDone]);

  useEffect(() => {
    if (commentDeleteDone) {
      toastSuccessMessage("댓글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.commentDeleteClear());
      revalidateStory();
    }
  }, [commentDeleteDone]);

  useEffect(() => {
    if (subCommentCreateDone) {
      toastSuccessMessage("답글을 성공적으로 작성했습니다.");
      dispatch(commentSlice.actions.subCommentCreateClear());
      revalidateStory();
    }
  }, [subCommentCreateDone]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
      dispatch(commentSlice.actions.subCommentDeleteClear());
      revalidateStory();
    }
  }, [subCommentDeleteDone]);

  useEffect(() => {
    if (storyLikeDone) {
      toastSuccessMessage("좋아요!💓");
      dispatch(storySlice.actions.storyLikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [storyLikeDone]);

  useEffect(() => {
    if (storyDislikeDone) {
      toastSuccessMessage("좋아요 취소💔");
      dispatch(storySlice.actions.storyDislikeClear());
      dispatch(getUserInfoAction());
      revalidateStory();
    }
  }, [storyDislikeDone]);
  const onClickScrollDown = useCallback(() => {
    (postRef?.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <StoryPostWrapper>
      <StoryPostThubnail onClickScrollDown={onClickScrollDown} story={story} />
      <XLG_Layout postRef={postRef}>
        <h2 className="main-title">연대기 위치</h2>
        {country && <CountryMap />}
        <Divider />
        {story && <StoryPost story={story} />}
        <StoryArticleList setSize={setSize} stories={stories} />
      </XLG_Layout>
    </StoryPostWrapper>
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
