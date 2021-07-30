import React, { FC, useState } from "react";
import { TopNavigationWrapper } from "./styles";

interface IProps {
  list: any[];
  onClickList: (value: string) => void;
  filter: string;
}

const TopNavigation: FC<IProps> = ({ filter, list, onClickList }) => {
  return (
    <TopNavigationWrapper>
      <div className="nav-inner-list">
        {list?.map((v, i) => {
          return (
            <li
              className={filter === v.value ? "active-list" : ""}
              onClick={() => onClickList(v.value)}
              key={i}
            >
              {v.name}
            </li>
          );
        })}
      </div>
    </TopNavigationWrapper>
  );
};

export default TopNavigation;
