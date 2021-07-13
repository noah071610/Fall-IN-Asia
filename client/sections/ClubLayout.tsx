import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ClubTitle from "@sections/ClubPage/ClubTitle";
import ClubPostList from "@sections/ClubPage/ClubPostList";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { noRevalidate, toastErrorMessage } from "config";
import { useSelector } from "react-redux";
import { RootState } from "slices";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;

interface IProps {}

const ClubLayout: FC<IProps> = ({ children }) => {
  const { query } = useRouter();
  const [clubHistory, setClubHistory] = useState<string[]>([]);
  const { currentPage } = useSelector((state: RootState) => state.main);
  const { data: clubData, error } = useSWR(
    `/club/${query?.group}?page=${currentPage || 1}`,
    fetcher
  );

  if (clubData) {
    console.log(clubData);
  }
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
      <ClubPostList clubPosts={clubData?.posts[0]} postCnt={clubData?.posts[1]} />
    </ClubWrapper>
  );
};

export default ClubLayout;
