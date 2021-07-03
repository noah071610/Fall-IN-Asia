import React, { FC, useState } from "react";
import { ClubPostContentWrapper } from "./styles";
import { Divider } from "antd";
interface IProps {}

const ClubPostContent: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ClubPostContentWrapper>
      <p>
        明洞のすぐお隣で徒歩で移動できます。地下鉄会賢（フェヒョン）駅から四方に広がる南大門市場には、
        <br />
        小さな路地から路面店に屋台まで卸売・小売店舗に飲食店等々・・・
        <br />
        約１万点ものお店がぎゅっと所狭しと並んでいます。
        <br />
        早朝から夜まで活気あふれる声が飛び交っています。ハンドメイドの材料や衣料から食料品までとにかく何でも揃っちゃう市場です。
      </p>
      <div className="like-section">
        <button className="basic-btn like-btn">
          <img src="https://image.flaticon.com/icons/png/24/456/456115.png" />
          <span className="like-number">0</span>
        </button>
        <button className="basic-btn like-btn">
          <span className="like-number">0</span>
          <img className="reverse" src="https://image.flaticon.com/icons/png/24/456/456115.png" />
        </button>
      </div>
    </ClubPostContentWrapper>
  );
};

export default ClubPostContent;
