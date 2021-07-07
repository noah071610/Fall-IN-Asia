import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection";
import PostingEditor from "@components/ClubPostingEditor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { noRevalidate, toastSuccessMessage } from "config";
import router, { useRouter } from "next/router";
import { clubSlice } from "slices/club";
import fetcher from "utils/fetcher";
import useSWR from "swr";

export const EditWrapper = styled.div`
  padding: 2rem;
`;
interface IProps {}

const edit: FC<IProps> = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data: clubData } = useSWR(`/group/${query?.group}`, fetcher, noRevalidate);
  const { clubPostEditConfirmDone, clubPostEditDone } = useSelector(
    (state: RootState) => state.club
  );
  useEffect(() => {
    if (clubPostEditDone) {
      dispatch(clubSlice.actions.clubPostEditClear());
      toastSuccessMessage("ポストの作成が終わりました😍");
      router.push(`/club/${query?.group}`);
    }
  }, [clubPostEditDone]);

  useEffect(() => {
    if (!clubPostEditConfirmDone) {
      router.push("/");
    }
  }, []);
  return (
    <EditWrapper>
      <ClubTitleSection clubName={clubData?.group_name} />
      <PostingEditor isEdit={true} />
    </EditWrapper>
  );
};

export default edit;
