import PosterCard from "@components/Cards/PosterCard";
import React, { FC, useState } from "react";
import { MainPosterWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { useRouter } from "next/router";

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
