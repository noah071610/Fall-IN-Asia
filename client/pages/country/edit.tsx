import React, { FC, useEffect } from "react";
import { toastSuccessMessage } from "config";
import router from "next/router";
import LGLayout from "@layout/LGLayout";
import MomentPostingForm from "@sections/MainPage/MomentPostingForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { momentSlice } from "slices/moment";

interface IProps {}

const edit: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { editPost, momentEditDone } = useSelector((state: RootState) => state.moment);

  useEffect(() => {
    if (!editPost || !user) {
      router.back();
    }
  }, [user, editPost]);

  useEffect(() => {
    if (momentEditDone) {
      toastSuccessMessage("모멘트를 수정했습니다.");
      router.push(`/country/${editPost?.code}/${editPost?.id}`);
      dispatch(momentSlice.actions.momentEditClear());
    }
  }, [momentEditDone, editPost]);

  return (
    <LGLayout>
      <MomentPostingForm editPost={editPost} />
    </LGLayout>
  );
};

export default edit;
