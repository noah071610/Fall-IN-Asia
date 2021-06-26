import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const SupportSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <div className="overlay" />
      <h1>
        <span>愛</span>を伝える簡単な方法
      </h1>
      <h3>たった広告を見ただけで全額を好きなアイドルにドネーション</h3>
    </Wrapper>
  );
};

export default SupportSection;
