import React, { FC, useCallback, useState } from "react";
import { MainCountryListWrapper } from "./styles";
import { SwiperSlide, Swiper } from "swiper/react";
import CountryCard from "@components/Cards/SmallCard";
import { ICountry } from "@typings/db";

interface IProps {
  countries: ICountry[] | undefined;
}

const MainCountryList: FC<IProps> = ({ countries }) => {
  const [onSearchForm, setOnSearchForm] = useState(false);
  const onClickOpenSearchForm = useCallback(() => {
    setOnSearchForm(true);
  }, []);
  return (
    <MainCountryListWrapper>
      <h3>아시아</h3>
      <div className="country-card-wrapper">
        {countries?.map((v, i) => {
          return <CountryCard country={v} key={i} />;
        })}
      </div>
      <h3>유라시아</h3>
      <h3>중동</h3>
      <h3>아프리카</h3>
      <h3>북아메리카</h3>
      <h3>남아메리카</h3>
      <h3>유럽</h3>
      <h3>오세아니아</h3>
    </MainCountryListWrapper>
  );
};

export default MainCountryList;
