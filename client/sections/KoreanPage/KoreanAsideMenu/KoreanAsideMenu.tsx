import React, { FC, useState } from "react";
import { KoreanAsideMenuWrapper } from "./styles";
import { japanMapList } from "config";
import { DownCircleOutlined } from "@ant-design/icons";
import useToggle from "@hooks/useToggle";

interface IProps {
  setType: (e: string) => void;
}

const KoreanAsideMenu: FC<IProps> = ({ setType }) => {
  const [onAreaFilter, onClickAreaFilter] = useToggle(true);
  const [onTypeFilter, onClickTypeFilter] = useToggle(true);
  return (
    <KoreanAsideMenuWrapper>
      <div onClick={onClickAreaFilter} className="korean-type">
        <h3>地域</h3>
        <DownCircleOutlined className={onAreaFilter && "reverse"} />
      </div>
      <div className="korean-list">
        <ul className={onAreaFilter ? "drop-down" : "roll-up"}>
          <li onClick={() => setType("")}>全国</li>
          {japanMapList.map((v, i) => (
            <li onClick={() => setType(v.name)} key={i}>
              {v.name}
            </li>
          ))}
        </ul>
      </div>
      <div onClick={onClickTypeFilter} className="korean-type">
        <h3>フィルター</h3>
        <DownCircleOutlined className={onAreaFilter && "reverse"} />
      </div>
      <div className="korean-list">
        <ul className={onTypeFilter ? "drop-down" : "roll-up"}>
          <li onClick={() => setType("")}>タイプ全部</li>
          <li onClick={() => setType("レッスン")}>レッスン</li>
          <li onClick={() => setType("韓国語勉強俱楽部")}>韓国語勉強俱楽部</li>
        </ul>
      </div>
    </KoreanAsideMenuWrapper>
  );
};

export default KoreanAsideMenu;
