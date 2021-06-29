import React, { FC, memo, useState } from "react";
import { CardWrapper, Icon, Content, RealTimeTable, SeeMorePopup } from "./styles";
import { Divider } from "antd";
interface IProps {}

const SupportCard: FC<IProps> = memo(() => {
  const [state, setstate] = useState();
  return (
    <CardWrapper>
      <Icon>
        <img src="https://img3.yna.co.kr/etc/inner/KR/2021/04/29/AKR20210429114751005_02_i_P2.jpg" />
      </Icon>
      <Content>
        <h1>アイピンク</h1>
        <h3>目標プレゼント: 縫いぐるみ</h3>
        <RealTimeTable>
          <div className="table-column followers">
            <span>352,540</span>
            <p>集まったドネーション</p>
          </div>
          <div className="table-column platform">
            <span>3</span>
            <p>参加者</p>
          </div>
          <div className="table-column comments">
            <span>23</span>
            <p>いいね</p>
          </div>
        </RealTimeTable>
      </Content>
      <SeeMorePopup className="seemore">
        ドネーション　
        <img src="https://img.icons8.com/emoji/48/000000/glowing-star.png" />
      </SeeMorePopup>
    </CardWrapper>
  );
});

export default memo(SupportCard);
