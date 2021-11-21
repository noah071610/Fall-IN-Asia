import React, { FC, memo, useCallback, useMemo } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { ICountry } from "@typings/db";
import { FLEX_STYLE, noRevalidate, SM_SIZE } from "config";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { css } from "@emotion/react";
import SwiperCore, { Autoplay } from "swiper";

import tw from "twin.macro";
import shortid from "shortid";
import { useTranslation } from "react-i18next";
import router from "next/router";
import styled from "@emotion/styled";

SwiperCore.use([Autoplay]);

const CountryPreviewSlideWrapper = (isMain?: boolean) => css`
  height: ${isMain ? "100px" : "100px"};
  @media (max-width: ${SM_SIZE}) {
    ${tw`h-16`}
  }
`;

const CountryImageCardWrapper = styled.div`
  ${tw`relative rounded-2xl w-full h-full cursor-pointer`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  ${FLEX_STYLE("center", "center")};
  .overlay {
    ${tw`rounded-2xl`}
  }
  h3 {
    ${tw`z-10`}
    ${tw`text-lg font-bold text-white`}
  }
  &:hover {
    .overlay {
      ${tw`opacity-30`}
    }
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`rounded-md`}
    .overlay {
      ${tw`rounded-md`}
    }
    h3 {
      ${tw`text-sm`}
    }
  }
`;

interface IProps {
  slidesPerView: number;
  isMain?: boolean;
}

const CountryPreviewSlide: FC<IProps> = ({ slidesPerView, isMain }) => {
  const { t } = useTranslation("common");
  const { data: countries } = useSWR<ICountry[]>("/country", fetcher, noRevalidate);

  const breakPoints = useMemo(() => {
    return {
      1024: {
        slidesPerView,
      },
      768: {
        slidesPerView: 5.2,
      },
      480: {
        slidesPerView: 3.6,
        spaceBetween: 8,
      },
      0: {
        slidesPerView: 2.8,
        spaceBetween: 4,
      },
    };
  }, []);

  const onClickArticleCountryImageCard = useCallback(
    (country: ICountry) => {
      router.push(`${isMain ? "/country/" : "/story?country="}${country?.code}`);
    },
    [isMain]
  );
  return (
    <Swiper
      autoplay={
        isMain
          ? {}
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
      {countries?.map((country) => {
        return (
          <SwiperSlide key={shortid.generate()}>
            <CountryImageCardWrapper
              onClick={() => onClickArticleCountryImageCard(country)}
              style={{ backgroundImage: `url(${country.image_src})` }}
            >
              <h3>{t(`country.${country.name}`)}</h3>
              <div className="overlay" />
            </CountryImageCardWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(CountryPreviewSlide);
