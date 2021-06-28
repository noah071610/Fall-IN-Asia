import React, { FC, useState } from "react";
import { TitleWrapper, ClubSelectModal } from "./styles";
import { Input } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
const { Search } = Input;

interface IProps {}

const ClubTitleSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <TitleWrapper>
      <div className="club-title">
        <h2>
          <span className="point">BTS</span> クラブ
        </h2>
        <a>
          <DownCircleOutlined />
        </a>
      </div>
      <div className="club-list">
        <span>おすすめのクラブ</span>
        <ul>
          <li className="tag">
            <a>Oh my girl</a>
          </li>
          <li className="tag">
            <a>Black Pink</a>
          </li>
          <li className="tag">
            <a>モンスターX</a>
          </li>
          <li className="tag">
            <a>セブンティーン</a>
          </li>
        </ul>
      </div>
      <ClubSelectModal>하이</ClubSelectModal>
    </TitleWrapper>
  );
};

export default ClubTitleSection;
