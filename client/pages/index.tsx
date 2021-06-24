import RealTimeCard from "@components/RealTimeCard";
import { Wrapper } from "@styles/index";
import React, { FC, useState } from "react";

interface Props {}

const index: FC<Props> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <RealTimeCard />
    </Wrapper>
  );
};

export default index;
