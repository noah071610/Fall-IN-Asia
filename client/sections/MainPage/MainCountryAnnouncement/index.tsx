import { IArticle, ICountry } from "@typings/db";
import { FC, memo, useCallback, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate, SM_SIZE } from "config";
import NewsCard from "@components/Cards/NewsCard";
import { NextArrow, PrevArrow } from "@components/SliderArrow";
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import Slider from "react-slick";
import { useRouter } from "next/router";

const MainCountryAnnouncementWrapper = styled(Slider)`
  .news-card-wrapper {
    box-shadow: none;
    border-radius: 15px;
    &:hover {
      box-shadow: none;
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .news-card-wrapper {
      .image-wrapper {
        ${tw`h-48`}
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        img {
          ${tw`h-48`}
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
      }
      .new-main {
        ${tw`px-4`}
      }
    }
  }
`;

interface IProps {
  news: IArticle[];
}

const slideSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const MainCountryAnnouncement: FC<IProps> = ({ news }) => {
  return (
    <MainCountryAnnouncementWrapper {...slideSettings}>
      {news?.map((v, i) => {
        return <NewsCard key={i} article={v} />;
      })}
    </MainCountryAnnouncementWrapper>
  );
};

export default memo(MainCountryAnnouncement);
