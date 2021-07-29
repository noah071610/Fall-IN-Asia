import React, { FC, useState } from "react";
import { TopNavigationWrapper } from "./styles";

interface IProps {}

const TopNavigation: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <TopNavigationWrapper>
      <div className="nav-inner-list">
        <li>여행사</li>
        <li>현지가이드</li>
        <li>이벤트</li>
      </div>
    </TopNavigationWrapper>
  );
};

export default TopNavigation;
