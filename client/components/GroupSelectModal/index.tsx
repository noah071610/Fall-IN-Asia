import React, { FC, useState } from "react";
import { GroupSelectModalWrapper } from "./styles";
import GroupCard from "@components/GroupCard";
import { Input } from "antd";
const { Search } = Input;
interface IProps {}

const GroupSelectModal: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <GroupSelectModalWrapper>
      <div className="group-recommeder">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
      <div className="group-search">
        <h3>検索</h3>
        <Search />
        <h3>グループ一覧</h3>
        <ul>
          <li className="tag">
            <span>BTS</span>
          </li>
          <li className="tag">
            <span>Black Pink</span>
          </li>
          <li className="tag">
            <span>セブンティーン</span>
          </li>
          <li className="tag">
            <span>A-pink</span>
          </li>
        </ul>
      </div>
    </GroupSelectModalWrapper>
  );
};

export default GroupSelectModal;
