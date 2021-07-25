import CountrySelectMap from "@components/CountrySelectMap";
import { ICountry } from "@typings/db";
import React, { FC, useState } from "react";
import { StoryPostInfoWrapper } from "./styles";

interface IProps {
  country: ICountry;
}

const StoryPostInfo: FC<IProps> = ({ country }) => {
  const [state, setstate] = useState();
  return (
    <StoryPostInfoWrapper>
      <div className="info-location">{/* <CountrySelectMap /> */}</div>
      <div className="info-country">
        <div style={{ backgroundImage: `url(${country?.image_src})` }} className="country-image">
          <h3>{country?.name}</h3>
          <div className="overlay" />
        </div>
        <ul className="info-stories">
          <li>
            <img src={country?.image_src} alt="" />
            <p>1. 재판의 전심절차로서 행정심판을 할 수 있다.</p>
          </li>
          <li>
            <img src={country?.image_src} alt="" />
            <p>행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다. 공</p>
          </li>
          <li>
            <img src={country?.image_src} alt="" />
            <p>공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.</p>
          </li>
          <li>
            <img src={country?.image_src} alt="" />
            <p>
              군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다.
            </p>{" "}
          </li>
        </ul>
      </div>
    </StoryPostInfoWrapper>
  );
};

export default StoryPostInfo;
