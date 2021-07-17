import React, { FC, useState } from "react";
import { KoreanAsideMenuWrapper } from "./styles";
import { japanMapList } from "config";
import { DownCircleOutlined } from "@ant-design/icons";
import useToggle from "@hooks/useToggle";
import { useDispatch } from "react-redux";
import router from "next/router";

interface IProps {
  setType: (e: string) => void;
}

const KoreanAsideMenu: FC<IProps> = ({ setType }) => {
  const dispatch = useDispatch();
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
          <li
            onClick={() => {
              setType("");
              router.push("korean");
            }}
          >
            全国
          </li>
          {japanMapList.map((v, i) => (
            <li
              onClick={() => {
                setType(v.name);
                router.push("korean");
              }}
              key={i}
            >
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
          <li
            onClick={() => {
              setType("");
              router.push("korean");
            }}
          >
            タイプ全部
          </li>
          <li
            onClick={() => {
              setType("レッスン");
              router.push("korean");
            }}
          >
            レッスン
          </li>
          <li
            onClick={() => {
              setType("韓国語勉強俱楽部");
              router.push("korean");
            }}
          >
            韓国語勉強俱楽部
          </li>
        </ul>
      </div>
    </KoreanAsideMenuWrapper>
  );
};

export default KoreanAsideMenu;
