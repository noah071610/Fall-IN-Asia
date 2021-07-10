import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import styled from "@emotion/styled";
import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import router, { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import ClubTitle from "@sections/ClubPage/ClubTitle";
import { noRevalidate, toastErrorMessage } from "config";
import { clubPostCreateAction } from "actions/club";
import useInput from "@hooks/useInput";
import { IClubPostForm } from "@typings/db";
import PostingLayout from "@components/PostingEditor/PostingLayout";
import Editor from "@components/PostingEditor/Editor";

const ClubPostingWrapper = styled.div`
  padding: 2rem;
`;

interface IProps {}

const post: FC<IProps> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data: groupData } = useSWR(`/group/${query.group}`, fetcher, noRevalidate);
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, setContent] = useState("");
  const { user } = useSelector((state: RootState) => state.user);
  const { clubPostCreateDone } = useSelector((state: RootState) => state.club);

  useEffect(() => {
    if (clubPostCreateDone) {
      router.push(`/club/${query?.group}`);
    }
  }, [clubPostCreateDone]);
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  const onClickSubmit = useCallback(() => {
    if (title === "" || !title?.trim()) {
      toastErrorMessage("タイトルを作成してください");
      return;
    }
    if (content === "" || !content?.trim()) {
      toastErrorMessage("内容を作成してください");
      return;
    }
    if (!user) {
      router.back();
      return;
    }
    let form: IClubPostForm = {
      title,
      groupId: groupData?.id,
      key_name: groupData?.key_name,
      content,
      userId: user?.id,
    };
    dispatch(clubPostCreateAction(form));
    setTitle("");
    setContent("");
  }, [title, content, user?.id, groupData?.id]);
  return (
    <ClubPostingWrapper>
      <ClubTitle clubName={groupData?.group_name} />
      <PostingLayout title={title} onChangeTitle={onChangeTitle} onClickSubmit={onClickSubmit}>
        <Editor setContent={setContent} />
      </PostingLayout>
    </ClubPostingWrapper>
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

export default post;
