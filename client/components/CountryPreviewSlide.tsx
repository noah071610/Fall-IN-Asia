import ImageCard from "@components/Cards/CountryImageCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { ICountry } from "@typings/db";
import { GRID_STYLE, MD_SIZE, noRevalidate } from "config";
import React, { FC, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { css } from "@emotion/react";
import SwiperCore, { Autoplay } from "swiper/core";
import tw from "twin.macro";

SwiperCore.use([Autoplay]);

const CountryPreviewSlideWrapper = (isMain?: boolean) => css`
  height: ${isMain ? "100px" : "100px"};
`;

interface IProps {
  slidesPerView: number;
  isMain?: boolean;
}

const CountryPreviewSlide: FC<IProps> = ({ slidesPerView, isMain }) => {
  const { data: countries } = useSWR<ICountry[]>(
    isMain ? "/country/popular" : "/country",
    fetcher,
    noRevalidate
  );

  const breakPoints = {
    1024: {
      slidesPerView,
    },
    768: {
      slidesPerView: 5.2,
    },
    480: {
      slidesPerView: 4.2,
      spaceBetween: 8,
    },
    0: {
      slidesPerView: 3.2,
      spaceBetween: 8,
    },
  };

  return (
    <Swiper
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
      breakpoints={breakPoints}
      slidesPerView={slidesPerView}
      freeMode={true}
      spaceBetween={16}
      css={CountryPreviewSlideWrapper(isMain)}
    >
      {countries?.map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <ImageCard isMain={isMain} country={v} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CountryPreviewSlide;
