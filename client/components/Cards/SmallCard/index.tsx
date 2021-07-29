import { ICountry, IUser } from "@typings/db";
import router from "next/router";
import React, { FC, memo, useCallback, useState } from "react";
import { SmallCardWrapper } from "./styles";

interface IProps {
  country: ICountry;
  isMain?: boolean;
}

const SmallCard: FC<IProps> = ({ country, isMain }) => {
  const onClickSmallCard = useCallback(() => {
    if (isMain) {
      router.push(`/country/${country?.code}`);
    } else {
      router.push(`/story?country=${country?.code}`);
    }
  }, []);
  return (
    <SmallCardWrapper onClick={onClickSmallCard}>
      <img src={country?.image_src} alt="country_image" />
      <div className="country-desc">
        <h4>{country?.name}</h4>
        <span className="count">포스팅: {country?.moments?.length}</span>
      </div>
    </SmallCardWrapper>
  );
};

export default memo(SmallCard);
