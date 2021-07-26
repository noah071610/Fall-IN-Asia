import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { toastSuccessMessage } from "config";
import router from "next/router";
import LG_Layout from "@layout/LG_Layout";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainPostSlice } from "slices/mainPost";

interface IProps {}

const edit: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { editPost, mainPostEditDone } = useSelector((state: RootState) => state.mainPost);

  useEffect(() => {
    if (!editPost) {
      router.back();
    }
  }, [user, editPost]);

  useEffect(() => {
    if (mainPostEditDone) {
      toastSuccessMessage("게시글을 수정했습니다.");
      router.push(`/country/${editPost?.code}/${editPost?.id}`);
      dispatch(mainPostSlice.actions.mainPostEditClear());
    }
  }, [mainPostEditDone, editPost]);

  return (
    <LG_Layout>
      <MainPostingForm editPost={editPost} />
    </LG_Layout>
  );
};

export default edit;
