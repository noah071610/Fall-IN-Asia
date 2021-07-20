import React, { FC, useCallback, useState } from "react";
import { MainCountryListWrapper } from "./styles";
import { SwiperSlide, Swiper } from "swiper/react";
import CountryCard from "@components/Cards/CountryCard";

interface IProps {}

const MainCountryList: FC<IProps> = () => {
  const [onSearchForm, setOnSearchForm] = useState(false);
  const onClickOpenSearchForm = useCallback(() => {
    setOnSearchForm(true);
  }, []);
  return (
    <MainCountryListWrapper>
      <h3>아시아</h3>
      <div className="country-card-wrapper">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
      <h3>아메리카</h3>
      <h3>아프리카</h3>
      <h3>오세아니아</h3>
      <h3>유럽</h3>
      <h3>중동</h3>
      <h3>유라시아</h3>
    </MainCountryListWrapper>
  );
};

export default MainCountryList;
