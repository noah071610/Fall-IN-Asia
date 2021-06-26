import React, { FC, memo, useState } from "react";
import { CardWrapper, Icon, Content, RealTimeTable, SeeMorePopup } from "./styles";
import { Divider } from "antd";
interface IProps {}

const SupportCard: FC<IProps> = memo(() => {
  const [state, setstate] = useState();
  return (
    <CardWrapper>
      <Icon>
        <img src="https://lh3.googleusercontent.com/proxy/y_N3dIG0laW4OFEo1Ab9oWVtcaa1mWcobTtqMCLskyHqgA-QAzikr2R9RNG2PaFcS-qwz8wzlJsBnus7DyFYrs_ARwvCT-MZDkUExtYJ88m2AAGRhDu0i8cJfOSn_2sGgD5Cse3g6ydASn4wKUUmJcyYGBjcZV-Dgk9W7GqKDKfCWGq4fRD5PUzVYhpJ8lw97ssr5r1hYAJnt0mUmBqr" />
      </Icon>
      <Content>
        <h1>アイピンク</h1>
        <h3>目標プレゼント: 縫いぐるみ</h3>
        <RealTimeTable>
          <div className="table-column followers">
            <span>352,540</span>
            <p>集まってるドネーション</p>
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
