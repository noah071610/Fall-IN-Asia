import { FC, useState } from "react";
import GoodsExchangeSection from "@sections/MainPage/GoodsExchangeSection";
import CommunitySection from "@sections/MainPage/CommunitySection";
import MusicChartSection from "@sections/MainPage/MusicChartSection";
import NewsSection from "@sections/MainPage/NewsSection";
import SupportSection from "@sections/MainPage/SupportSection";

import styled from "@emotion/styled";

const MainWrapper = styled.div`
  padding: 2rem 0;
`;

interface Props {}

const index: FC<Props> = () => {
  return (
    <MainWrapper>
      <GoodsExchangeSection />
      <NewsSection />
      <MusicChartSection />
      <SupportSection />
      <CommunitySection />
    </MainWrapper>
  );
};

export default index;
