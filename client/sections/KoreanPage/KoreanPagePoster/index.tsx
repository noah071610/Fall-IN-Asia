import React, { FC, useState } from "react";
import { KoreanPagePosterWrapper } from "./styles";

interface IProps {}

const KoreanPagePoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  return <KoreanPagePosterWrapper></KoreanPagePosterWrapper>;
};

export default KoreanPagePoster;
