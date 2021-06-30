import React, { FC, memo, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const GoodsCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <div className="image-wrapper">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71FMTA7Zt8L._AC_SX466_.jpg" />
      </div>
      <div>
        <h3>ジミンのカード</h3>
        <h5>丹野美沙</h5>
        <ul>
          <li className="tag">カード</li>
          <li className="tag">早め</li>
          <li className="tag">ユニーク</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default memo(GoodsCard);
