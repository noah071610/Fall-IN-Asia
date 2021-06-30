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
          <span>ドネーション</span>
        </h2>
        <h4>ドネーションをもっと安全で簡単にしましょう</h4>
      </div>
    </Wrapper>
  );
};

export default SupportPoster;
