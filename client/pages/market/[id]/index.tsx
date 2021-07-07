import React, { FC, useState } from "react";
import MarketLayout from "@sections/MarketLayout";
import DescritionSection from "@components/DescritionSection";
interface IProps {}

const index: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MarketLayout>
      <DescritionSection />
    </MarketLayout>
  );
};

export default index;
