import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  FLEX_STYLE,
  FONT_STYLE,
  GRID_STYLE,
  noRevalidate,
  toastSuccessMessage,
  WHITE_COLOR,
} from "config";
import NameSpace from "@components/NameSpace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import XLG_Layout from "@layout/XLG_Layout";
import CountrySelectMap from "@components/CountrySelectMap";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ICountry, IStory } from "@typings/db";
import StoryPostInfo from "@sections/StoryPage/StoryPostInfo";
import { Divider } from "antd";
import StoryPost from "@sections/StoryPage/StoryPost";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { storySlice } from "slices/story";
import { commentSlice } from "slices/comment";
import StoryMainPoster from "@sections/StoryPage/StoryMainPoster";
import StoryOwnerAnotherPosts from "@sections/StoryPage/StoryOwnerAnotherPosts";
import StoryPagination from "@sections/StoryPage/StoryPagination";

export const StoryPostWrapper = styled.div`
  .story-subtitle {
    text-align: center;
    ${FONT_STYLE(1.3, true)}
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;
interface IProps {}

const index: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [filter, setFilter] = useState("");
  const { data: story, revalidate: revalidateStory } = useSWR<IStory>(
    `/story/${query?.code}/${query?.storyId}`,
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
  useEffect(() => {}, []);
  return (
    <StoryPostWrapper>
      <StoryMainPoster story={story} />
      <XLG_Layout>
        <h2 className="story-subtitle">연대기 정보</h2>
        {country && <StoryPostInfo country={country} />}
        <Divider />
        {story && <StoryPost story={story} />}
        <StoryPagination />
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
