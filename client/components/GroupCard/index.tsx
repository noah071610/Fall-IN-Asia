import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const GroupCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <div className="mask" />
      <h2>Oh my girl</h2>
    </Wrapper>
  );
};

export default GroupCard;
