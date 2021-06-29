import React, { FC, useState } from "react";
import { TitleWrapper, ClubSelectModal } from "./styles";
import { Input } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import CommonTitle from "@components/Common/CommonTitle";
import CommonSearch from "@components/Common/CommonSearch";
const { Search } = Input;

interface IProps {}

const ClubTitleSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <TitleWrapper>
      <CommonTitle point="BTS" title="クラブ" />
      <div className="club-list">
        <span>訪ねたクラブ</span>
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
    </TitleWrapper>
  );
};

export default ClubTitleSection;
