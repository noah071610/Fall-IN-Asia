import styled from "@emotion/styled";
import CommonTitle from "@components/Common/CommonTitle";

import { getUserInfoAction } from "actions/user";
import axios from "axios";
import { wrapper } from "configureStore";
import PostingLayout from "@components/PostingEditor/PostingLayout";
import ImageCropper from "@components/PostingEditor/ImageCropper";
import useInput from "@hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import { toastErrorMessage, toastSuccessMessage } from "config";
import { galleryPostCreateAction } from "actions/gallery";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import router from "next/router";
import { gallerySlice } from "slices/gallery";

export const GalleryPostWrapper = styled.div`
  padding: 2rem;
`;

const post = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const { galleryPostCreateDone } = useSelector((state: RootState) => state.gallery);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (galleryPostCreateDone) {
      router.push("/gallery");
      toastSuccessMessage("ポストを成功的に投稿致しました😊");
      dispatch(gallerySlice.actions.galleryPostCreateClear());
      setTitle("");
      setBlob(null);
    }
  }, [galleryPostCreateDone]);
  useEffect(() => {
    if (!user) {
      router.back();
    }
  }, [user]);

  const onClickSubmit = useCallback(() => {
    if (!blob) {
      toastErrorMessage("イメージがありません！");
      return;
    }
    if (!title) {
      toastErrorMessage("タイトルを作成してください。");
      return;
    }
    const form = new FormData();
    form.append("image", blob);
    form.append("title", String(title));
    dispatch(galleryPostCreateAction(form));
  }, [blob, title]);
  return (
    <GalleryPostWrapper>
      <CommonTitle point="ギャラリー" title="" subtitle="イメージアップロード" />
      <PostingLayout title={title} onChangeTitle={onChangeTitle} onClickSubmit={onClickSubmit}>
        <ImageCropper setBlob={setBlob} />
      </PostingLayout>
    </GalleryPostWrapper>
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
