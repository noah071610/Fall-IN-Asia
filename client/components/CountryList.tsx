import CountryCard from "@components/Cards/CountryCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { ICountry } from "@typings/db";
import { GRID_STYLE, noRevalidate } from "config";
import React, { FC, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { css } from "@emotion/react";
import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);

const CountryListWrapper = (isMain?: boolean) => css`
  ${GRID_STYLE("1rem", "repeat(3,1fr)")};
  height: ${isMain ? "100px" : "150px"};
`;

interface IProps {
  slidesPerView: number;
  isMain?: boolean;
}

const CountryList: FC<IProps> = ({ slidesPerView, isMain }) => {
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);
  return (
    <Swiper
      loop={true}
      autoplay={
        isMain
          ? { delay: 1000000 }
          : {
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
              disableOnInteraction: false,
              delay: 2000,
            }
      }
      slidesPerView={slidesPerView}
      freeMode={true}
      spaceBetween={16}
      css={CountryListWrapper(isMain)}
    >
      {countries?.map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <CountryCard country={v} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CountryList;
