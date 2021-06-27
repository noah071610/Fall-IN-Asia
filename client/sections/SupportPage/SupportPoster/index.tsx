import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const SupportPoster: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <img src="https://image.freepik.com/free-vector/friends-exchanging-gift-boxes-with-one-another_53876-43036.jpg" />
      <div>
        <h2>
          <span>クリック</span>一回で
          <br />
          好きなアイドルにプレゼント
        </h2>
        <h4>⭐ 純粋な願いを好きなアイドルに伝えましょう。</h4>
        <h4>
          ⭐ 不便な個人のドネーションではない専門的な
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ドネーション管理サービスを差し上げます
        </h4>
        <h4>⭐ 広告を見るだけで無料ドネーションサービス提供。</h4>
        <h4>⭐ 多重クリック、不法広告を強く禁じて居ります。</h4>
      </div>
    </Wrapper>
  );
};

export default SupportPoster;
