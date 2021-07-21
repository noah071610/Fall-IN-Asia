import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import router, { useRouter } from "next/router";
import { clubSlice } from "slices/mainPost";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import PostingLayout from "@components/PostingEditor/PostingLayout";
import useInput from "@hooks/useInput";
import { IClubPostForm } from "@typings/db";
import { clubPostEditAction } from "actions/mainPost";
import Editor from "@components/PostingEditor/Editor";
import { wrapper } from "configureStore";
import axios from "axios";
import { getUserInfoAction } from "actions/user";

export const EditWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const edit: FC<IProps> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data: clubData } = useSWR(`/group/${query?.group}`, fetcher, noRevalidate);
  const { clubPostEditDone, editPost } = useSelector((state: RootState) => state.club);
  const { user } = useSelector((state: RootState) => state.user);
  const [title, onChangeTitle, setTitle] = useInput(editPost?.title);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (clubPostEditDone) {
      router.push(`/club/${query?.group}`);
      toastSuccessMessage("ポストを成功的に書き直りました😊");
      dispatch(clubSlice.actions.clubPostEditClear());
      dispatch(clubSlice.actions.clubPostEditConfirmClear());
      setTitle("");
      setContent("");
    }
  }, [clubPostEditDone]);

  useEffect(() => {
    if (editPost) {
      if (!user) {
        router.back();
      }
    }
  }, [editPost]);

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
      content,
      postId: editPost.id,
    };
    dispatch(clubPostEditAction(form));
  }, [title, content, user?.id, editPost]);
  return (
    <EditWrapper>
      <ClubTitleSection clubName={clubData?.group_name} />
      <PostingLayout title={title} onChangeTitle={onChangeTitle} onClickSubmit={onClickSubmit}>
        <Editor setContent={setContent} prevContent={editPost?.content} />
      </PostingLayout>
    </EditWrapper>
  );
};

export default edit;
