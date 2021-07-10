import React, { FC } from "react";
import styled from "@emotion/styled";
import ClubTitle from "@sections/ClubPage/ClubTitle";
import ClubPostList from "@sections/ClubPage/ClubPostList";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { noRevalidate, toastErrorMessage } from "config";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;
const ClubLayout: FC = ({ children }) => {
  const { query } = useRouter();
  const { data: clubData, error } = useSWR(`/club/${query?.group}`, fetcher, noRevalidate);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }

  return (
    <ClubWrapper>
      <ClubTitle clubName={clubData?.name} />
      {children}
      <ClubPostList clubPosts={clubData?.posts} />
    </ClubWrapper>
  );
};

export default ClubLayout;
