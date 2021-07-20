import React, { FC, useState } from "react";
import { CountryCardSildeWrapper } from "./styles";
import { SwiperSlide, Swiper } from "swiper/react";
import CountryCard from "@components/Cards/CountryCard";

interface IProps {}

const CountryCardSilde: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CountryCardSildeWrapper>
      <Swiper className="slide-country" slidesPerView={4} freeMode={true}>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CountryCard />
        </SwiperSlide>
      </Swiper>
    </CountryCardSildeWrapper>
  );
};

export default CountryCardSilde;
