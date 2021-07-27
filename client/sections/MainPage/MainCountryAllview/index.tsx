import React, { FC } from "react";
import { MainCountryAllviewWrapper } from "./styles";
import SmallCard from "@components/Cards/SmallCard";
import { ICountry } from "@typings/db";

interface IProps {
  countries: ICountry[] | undefined;
  isMain?: boolean;
}

const MainCountryAllview: FC<IProps> = ({ countries, isMain }) => {
  return (
    <MainCountryAllviewWrapper>
      <h3>아시아</h3>
      <div className="country-card-wrapper">
        {countries?.map((v, i) => {
          return <SmallCard isMain={isMain} country={v} key={i} />;
        })}
      </div>
      <h3>유라시아</h3>
      <h3>중동</h3>
      <h3>아프리카</h3>
      <h3>북아메리카</h3>
      <h3>남아메리카</h3>
      <h3>유럽</h3>
      <h3>오세아니아</h3>
    </MainCountryAllviewWrapper>
  );
};

export default MainCountryAllview;
