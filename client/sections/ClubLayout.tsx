import React, { FC, useEffect, useState } from "react";
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
  const [clubHistory, setClubHistory] = useState<string[]>([]);
  const { query } = useRouter();

  const { data: clubData, error } = useSWR(`/club/${query?.group}`, fetcher, noRevalidate);
  if (error) {
    toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  }
  useEffect(() => {
    if (localStorage.getItem("visited_club")) {
      setClubHistory([query?.group, ...JSON.parse(localStorage.getItem("visited_club")!)]);
    } else {
      setClubHistory([query?.group as string]);
    }
    setClubHistory((prev) => [...new Set(prev)]);
  }, []);

  useEffect(() => {
    return () => {
      if (0 < clubHistory.length && clubHistory.length < 6) {
        localStorage.setItem("visited_club", JSON.stringify(clubHistory));
      }
    };
  }, [clubHistory]);

  return (
    <ClubWrapper>
      <ClubTitle clubHistory={clubHistory} clubName={clubData?.name} />
      {children}
      <ClubPostList clubPosts={clubData?.posts} />
    </ClubWrapper>
  );
};

export default ClubLayout;
