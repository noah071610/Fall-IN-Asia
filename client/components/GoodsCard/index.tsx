import React, { FC, memo, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const GoodsCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <img src="https://images-na.ssl-images-amazon.com/images/I/71FMTA7Zt8L._AC_SX466_.jpg" />
      <h3>Jimin's card</h3>
      <ul>
        <li className="tag">カード</li>
        <li className="tag">早め</li>
        <li className="tag">ユニーク</li>
      </ul>
      <p>
        希望金額 : <span>交換可能</span>
      </p>
    </Wrapper>
  );
};

export default memo(GoodsCard);
