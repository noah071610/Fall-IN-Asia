import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import AlbumCard from "@components/Cards/AlbumCard";

interface IProps {}

const MusicChartSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <div className="chart-top">
        <AlbumCard isTop={true} />
      </div>
      <div className="chart-another">
        <AlbumCard isTop={false} />
        <AlbumCard isTop={false} />
        <AlbumCard isTop={false} />
        <AlbumCard isTop={false} />
        <AlbumCard isTop={false} />
        <AlbumCard isTop={false} />
      </div>
    </Wrapper>
  );
};

export default MusicChartSection;
