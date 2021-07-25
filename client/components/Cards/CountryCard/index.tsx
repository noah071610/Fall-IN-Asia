import { ICountry } from "@typings/db";
import React, { FC, useState } from "react";
import { CountryCardWrapper } from "./styles";

interface IProps {
  country: ICountry;
}

const CountryCard: FC<IProps> = ({ country }) => {
  return (
    <CountryCardWrapper style={{ backgroundImage: `url(${country.image_src})` }}>
      <h3>{country.name}</h3>
      <div className="overlay" />
    </CountryCardWrapper>
  );
};

export default CountryCard;
