import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import MainLayout from "@layout/MainLayout";
import AutoCompleteSearch from "@components/AutoCompleteForm";
import MainCountryList from "@sections/MainPage/MainCountryAllview";
import CountryCardSilde from "@components/CountryCardSilde";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import {
  FLEX_STYLE,
  GRAY_COLOR,
  HOVER_GRAY,
  toastErrorMessage,
  toastSuccessMessage,
  WHITE_STYLE,
} from "config";
import { ICountry } from "@typings/db";
import styled from "@emotion/styled";
import router from "next/router";
import LG_Layout from "@layout/LG_Layout";
import MainPostingForm from "@sections/MainPage/MainPostingForm";
import { getUserInfoAction } from "actions/user";
import { wrapper } from "configureStore";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainPostSlice } from "slices/mainPost";

interface IProps {}

const edit: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { editPost, mainPostEditDone } = useSelector((state: RootState) => state.mainPost);

  useEffect(() => {
    if (!user) {
      router.back();
      return;
    }
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
