import React, { FC, useState } from "react";
import { CardWrapper, Icon, Content } from "./styles";

interface IProps {}

const RealTimeCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CardWrapper>
      <Icon>
        <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202103/12/img_20210312145811_acb61b6a.webp" />
      </Icon>
      <Content>
        <h2>파이</h2>
        <span className="tag">화제의인물</span>
        <span className="tag">욕먹는중</span>
        <span className="tag">에구머니나</span>
        <span className="tag">하쿠나마타타</span>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Content>
    </CardWrapper>
  );
};

export default RealTimeCard;
