import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ClubTitle from "@sections/ClubPage/ClubTitle";
import ClubPostList from "@sections/ClubPage/ClubPostList";
import useSWR from "swr";
import router, { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { noRevalidate, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainSlice } from "slices/main";
import { IGroup } from "@typings/db";

export const ClubWrapper = styled.div`
  padding: 2rem;
`;

interface IProps {}

const ClubLayout: FC<IProps> = ({ children }) => {
  const { query } = useRouter();
  const [isPossibleRoute, setIsPossibleRoute] = useState(false);
  const [clubHistory, setClubHistory] = useState<string[]>([]);
  const { data: possibleGroups } = useSWR(`/group`, fetcher, noRevalidate);
  const { data: clubData } = useSWR(
    `/club/${query?.group}?page=${query?.page || 1}&postId=${query?.id || 0}`,
    fetcher
  );

  // if (error) {
  //   toastErrorMessage("予想できないエラーが発生しました。もう一度接続してください。");
  // }

  useEffect(() => {
    if (possibleGroups) {
      if (!possibleGroups.find((v: IGroup) => v.key_name === query.group)) {
        router.push("/");
      } else {
        setIsPossibleRoute(true);
      }
    }
  }, [query]);

  useEffect(() => {
    if (isPossibleRoute) {
      if (localStorage.getItem("visited_club")) {
        setClubHistory([query?.group, ...JSON.parse(localStorage.getItem("visited_club")!)]);
      } else {
        setClubHistory([query?.group as string]);
      }
      setClubHistory((prev) => [...new Set(prev)]);
    }
  }, [query, isPossibleRoute]);

  useEffect(() => {
    return () => {
      if (0 < clubHistory.length && clubHistory.length < 6 && isPossibleRoute) {
        localStorage.setItem("visited_club", JSON.stringify(clubHistory));
      }
    };
  }, [clubHistory, isPossibleRoute]);

  return (
    <ClubWrapper>
      <ClubTitle clubHistory={clubHistory} clubName={clubData?.name} />
      {children}
      <ClubPostList clubPosts={clubData?.posts[0]} postCnt={clubData?.posts[1]} />
    </ClubWrapper>
  );
};

export default ClubLayout;
