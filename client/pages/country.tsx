import React, { FC, useState } from "react";
import MainLayout from "@layout/MainLayout";
import AutoCompleteSearch from "@components/AutoCompleteSearch";
import MainCountryList from "@sections/MainPage/MainCountryList";
import CountryCardSilde from "@components/CountryCardSilde";

interface IProps {}

const country: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainLayout>
      <div className="layout_main">
        <h2 className="main-title">인기여행지</h2>
        <CountryCardSilde />
        <h2 className="main-title">국가선택</h2>
        <AutoCompleteSearch />
        <MainCountryList />
      </div>
    </MainLayout>
  );
};

export default country;
