import React, { FC, useState } from "react";
import { MainCountryMenuWrapper } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/swiper.min.css";

interface IProps {}

const MainCountryMenu: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainCountryMenuWrapper slidesPerView={5} spaceBetween={0} freeMode={true}>
      <SwiperSlide style={{ margin: 0 }} className="country-list">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/225px-Flag_of_Thailand.svg.png"
          alt=""
        />
        <span>태국</span>
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0 }} className="country-list">
        <img src="https://www.mofa.go.kr/upload/bbs/NN001/20171026052738683.gif" alt="" />
        <span>일본</span>
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0 }} className="country-list">
        <img
          src="https://w.namu.la/s/183004771c3ffdb5d87f9d8bb979006122a3cc153296d4a32caa605333358df9f6633bddee6114e7c9fceaff414f13923837c5c9a1d61ed63f68a7a0557c4bf20dca6e8309d3f11f5a059798bf0dfa30939e030dd691d7f614c71b5c59606f70"
          alt=""
        />
        <span>대만</span>
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0 }} className="country-list">
        <img src="https://www.mofa.go.kr/upload/bbs/NN001/20171025044232653.gif" alt="" />
        <span>인도</span>
      </SwiperSlide>
      <SwiperSlide style={{ margin: 0 }} className="country-list">
        <img
          src="https://w.namu.la/s/82e8f0ba23b7861b4ae69bcf0523076d2151136ad3591c81e8cb49e563a6c46a9faaaa519f1f60a1f581714ddcf63c8c8c22d79c9e93ba0b010ca00663baf82944be5fdeb7604aca247aadd920e4e607b56c751270cecdb11f03b4aa4d4ef38a"
          alt=""
        />
        <span>미국</span>
      </SwiperSlide>
    </MainCountryMenuWrapper>
  );
};

export default MainCountryMenu;
