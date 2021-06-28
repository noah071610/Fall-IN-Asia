import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

interface IProps {}

const BattleSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <h1>
        <span>橋川</span>様の案件
        <br />
        BTSとセブンティーンどちらがダンス上手い？
      </h1>
      <div className="battle-group">
        <div>
          <img src="https://dimg.donga.com/ugc/CDB/KOREAN/Article/60/aa/d6/55/60aad655011dd2738245.jpg" />
        </div>
        <div>
          <img src="https://coneru-web.com/wp-content/uploads/2018/04/korean-seventeen.jpg" />
        </div>
      </div>
      <div className="battle-vote">
        <img src="https://image.freepik.com/free-vector/character-illustration-people-with-vote-icons_53876-43035.jpg" />
        <div>
          <h2>投票は皆様のご参加で作られております。</h2>
          <button>話題登録</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BattleSection;
