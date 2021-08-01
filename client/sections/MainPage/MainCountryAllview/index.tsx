import React, { FC } from "react";
import { MainCountryAllviewWrapper } from "./styles";
import SmallCard from "@components/Cards/SmallCard";
import { ICountry } from "@typings/db";
import { GRAY_COLOR } from "config";

interface IProps {
  countries: ICountry[] | undefined;
  isMain?: boolean;
}

const MainCountryAllview: FC<IProps> = ({ countries, isMain }) => {
  return (
    <MainCountryAllviewWrapper style={isMain ? {} : { marginTop: 0, paddingTop: 0 }}>
      <h3>동북아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "동북아시아")
          .map((v, i) => {
            return <SmallCard isMain={isMain} country={v} key={i} />;
          })}
      </div>
      <h3>동남아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "동남아시아")
          .map((v, i) => {
            return <SmallCard isMain={isMain} country={v} key={i} />;
          })}
      </div>
      <h3>남아시아</h3>
      <div className="country-card-wrapper">
        {countries
          ?.filter((v) => v.continent === "남아시아")
          .map((v, i) => {
            return <SmallCard isMain={isMain} country={v} key={i} />;
          })}
      </div>
    </MainCountryAllviewWrapper>
  );
};

export default MainCountryAllview;
