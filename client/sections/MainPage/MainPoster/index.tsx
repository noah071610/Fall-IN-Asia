import PosterCard from "@components/Cards/PosterCard";
import React, { FC } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { XLG_SIZE } from "config";
import tw from "twin.macro";
const MainPosterWrapper = styled.div`
  width: ${XLG_SIZE};
  ${tw`mx-auto rounded-2xl pt-24`}

  @media (max-width: 900px) {
    ${tw`w-full px-4`}
  }
`;

interface IProps {}

const MainPoster: FC<IProps> = () => {
  const { query } = useRouter();
  const { data: country } = useSWR(query?.code ? `/country/${query?.code}` : null, fetcher);
  return (
    <MainPosterWrapper>
      <PosterCard country={country} isMain={true} />
    </MainPosterWrapper>
  );
};

export default MainPoster;
