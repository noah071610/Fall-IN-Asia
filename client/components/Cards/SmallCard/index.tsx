import { ICountry, IUser } from "@typings/db";
import router from "next/router";
import React, { FC, memo, useCallback, useState } from "react";
import { SmallCardWrapper } from "./styles";

interface IProps {
  country?: ICountry;
  user?: IUser;
}

const SmallCard: FC<IProps> = ({ country, user }) => {
  const onClickSmallCard = useCallback(() => {
    if (country) {
      router.push(`/country/${country.code}`);
    } else {
      router.push(`/user/${user?.id}`);
    }
  }, [country, user]);
  return (
    <SmallCardWrapper onClick={onClickSmallCard}>
      <img src={country ? country?.image_src : user?.icon} alt="country_image" />
      <div className="country-desc">
        <h4>{country ? country?.name : user?.name}</h4>
        <span className="count">포스팅: {country ? country.mainPosts?.length : 0}</span>
      </div>
    </SmallCardWrapper>
  );
};

export default memo(SmallCard);
