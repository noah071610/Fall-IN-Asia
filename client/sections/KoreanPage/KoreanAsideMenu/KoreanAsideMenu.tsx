import React, { FC, useState } from "react";
import { KoreanAsideMenuWrapper } from "./styles";
import { japanMapList } from "config";
import { DownCircleOutlined } from "@ant-design/icons";
import useToggle from "@hooks/useToggle";

interface IProps {}

const KoreanAsideMenu: FC<IProps> = () => {
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
          {japanMapList.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
      </div>
      <div onClick={onClickTypeFilter} className="korean-type">
        <h3>フィルター</h3>
        <DownCircleOutlined className={onAreaFilter && "reverse"} />
      </div>
      <div className="korean-list">
        <ul className={onTypeFilter ? "drop-down" : "roll-up"}>
          <li>TOPIK</li>
          <li>会話</li>
          <li>ビジネス</li>
          <li>趣味</li>
        </ul>
      </div>
    </KoreanAsideMenuWrapper>
  );
};

export default KoreanAsideMenu;
