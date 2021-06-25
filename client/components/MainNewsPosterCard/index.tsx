import React, { FC, useState } from "react";
import { CardWrapper } from "./styles";

interface IProps {}

const MainNewsPosterCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CardWrapper>
      <img src="https://dimg.donga.com/ugc/CDB/KOREAN/Article/60/aa/d6/55/60aad655011dd2738245.jpg" />
      <h3>🚀　K-POPニュース</h3>
      <h2>BTS, グローバルの舞台でButterのパフォーマンスの見せて輝いた</h2>
    </CardWrapper>
  );
};

export default MainNewsPosterCard;
