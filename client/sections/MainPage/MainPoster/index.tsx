import PosterCard from "@components/Cards/PosterCard";
import React, { FC, useState } from "react";
import { MainPosterWrapper } from "./styles";

interface IProps {}

const MainPoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainPosterWrapper>
      <PosterCard isMain={true} />
    </MainPosterWrapper>
  );
};

export default MainPoster;
