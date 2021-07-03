import React, { FC } from "react";
import styled from "@emotion/styled";
import ClubTitleSection from "@sections/ClubPage/ClubTitleSection";
import ClubMainSection from "@sections/ClubPage/ClubMainSection";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;
const ClubLayout: FC = ({ children }) => {
  const { query } = useRouter();
  const { data, error, revalidate, mutate } = useSWR(`/club/${query.group}`, fetcher);

  return (
    <ClubWrapper>
      <ClubTitleSection />
      {children}
      <ClubMainSection clubPosts={data} />
    </ClubWrapper>
  );
};

export default ClubLayout;
