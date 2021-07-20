import NameSpace from "@components/NameSpace";
import React, { FC, useState } from "react";
import { CountryCardWrapper } from "./styles";

interface IProps {}

const CountryCard: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CountryCardWrapper>
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAxNzA3MTlfNTIg/MDAxNTAwNDI2MDM2NTc1.rWF1_8farUHBEqTR0D8c66ByHndz4Fmh9ZVFGinwDwUg.0Wlul1mFQq5ntcmfbRh79A7BBM7RErFSVWkgLstFBxgg.JPEG.asia_enjoy/%EB%B0%A9%EC%BD%95%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89_2%EB%B0%953%EC%9D%BC_%EC%9D%BC%EC%A0%95_%EC%B6%94%EC%B2%9C_-_%ED%83%9C%EA%B5%AD%EC%97%AC%ED%96%89_%EC%99%95%EA%B6%81%ED%88%AC%EC%96%B46.jpg?type=w800"
        alt=""
      />
      <div className="country-desc">
        <h4>태국</h4>
        <span className="count">포스팅: 0</span>
      </div>
    </CountryCardWrapper>
  );
};

export default CountryCard;
