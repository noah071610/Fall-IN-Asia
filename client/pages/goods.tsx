import RealTimeCard from "@components/RealTimeCard";
import RealTimeFilter from "@components/RealTimeFilter";
import { Wrapper } from "@styles/goods";
import React, { FC, useState } from "react";

interface Props {}

const index: FC<Props> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <RealTimeFilter />
      <RealTimeCard />
      <RealTimeCard />
      <RealTimeCard />
    </Wrapper>
  );
};

export default index;
