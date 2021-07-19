import { DEFAULT_ICON_URL } from "config";
import React, { FC, useState } from "react";
import { NameSpaceWrapper } from "./styles";

interface IProps {}

const NameSpace: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <NameSpaceWrapper>
      <div className="icon">
        <img src={DEFAULT_ICON_URL} alt="" />
      </div>
      <div className="name">
        <span>장현수마마</span>
        <span className="date">2021/07/19</span>
      </div>
    </NameSpaceWrapper>
  );
};

export default NameSpace;
