import ImageCard from "@components/Cards/CountryImageCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { ICountry } from "@typings/db";
import { noRevalidate, SM_SIZE } from "config";
import React, { FC, memo, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { css } from "@emotion/react";
import SwiperCore, { Autoplay } from "swiper/core";
import tw from "twin.macro";

SwiperCore.use([Autoplay]);

const CountryPreviewSlideWrapper = (isMain?: boolean) => css`
  height: ${isMain ? "100px" : "100px"};
  @media (max-width: ${SM_SIZE}) {
    ${tw`h-16`}
  }
`;

interface IProps {
  slidesPerView: number;
  isMain?: boolean;
}

const CountryPreviewSlide: FC<IProps> = ({ slidesPerView, isMain }) => {
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);

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
      slidesPerView: 3.6,
      spaceBetween: 4,
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

export default memo(CountryPreviewSlide);
