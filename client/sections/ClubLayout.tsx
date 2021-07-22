import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSWR from "swr";
import router, { useRouter } from "next/dist/client/router";
import fetcher from "utils/fetcher";
import { noRevalidate, toastErrorMessage } from "config";

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

  useEffect(() => {
    if (possibleGroups) {
      if (!possibleGroups.find((v: IGroup) => v.key_name === query.group)) {
        router.push("/");
      } else {
        setIsPossibleRoute(true);
      }
    }
  }, [query]);

  return (
    <ClubWrapper>
      <ClubTitle clubHistory={clubHistory} clubName={clubData?.name} />
      {children}
      <ClubPostList clubPosts={clubData?.posts[0]} postCnt={clubData?.posts[1]} />
    </ClubWrapper>
  );
};

export default ClubLayout;
