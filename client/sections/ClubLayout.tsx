import React, { FC } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection";
import ClubMainSection from "@sections/ClubPage/ClubMainSection";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { toastErrorMessage } from "config";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;
const ClubLayout: FC = ({ children }) => {
  const { query } = useRouter();
  const { data: clubData, error, revalidate, mutate } = useSWR(`/club/${query?.group}`, fetcher);
  if (error) {
    toastErrorMessage("エラーが発生しました。");
  }
  return (
    <ClubWrapper>
      <ClubTitleSection clubName={clubData?.name} />
      {children}
      <ClubMainSection clubPosts={clubData?.posts} />
    </ClubWrapper>
  );
};

export default ClubLayout;
