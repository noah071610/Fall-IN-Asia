import { ICountry } from "@typings/db";
import router from "next/router";
import React, { FC, memo, useCallback, useState } from "react";
import { CountryCardWrapper } from "./styles";

interface IProps {
  country: ICountry;
}

const CountryCard: FC<IProps> = ({ country }) => {
  const onClickCountry = useCallback(() => {
    router.push(`/country/${country.code}`);
  }, []);
  return (
    <CountryCardWrapper onClick={onClickCountry}>
      <img src={country?.image_src} alt="country_image" />
      <div className="country-desc">
        <h4>{country?.name}</h4>
        <span className="count">포스팅: {country.mainPosts?.length}</span>
      </div>
    </CountryCardWrapper>
  );
};

export default memo(CountryCard);
