import PosterCard from "@components/Cards/PosterCard";
import React, { FC } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { SM_SIZE, XLG_SIZE } from "config";
import tw from "twin.macro";
import { NextArrow, PrevArrow } from "@components/SliderArrow";
import { useTranslation } from "react-i18next";

const MainPosterWrapper = styled.section`
  width: ${XLG_SIZE};
  ${tw`mx-auto rounded-2xl`}
  padding-top:6.5rem;
  .slick-arrow {
    display: none !important;
  }
  @media (max-width: 900px) {
    ${tw`w-full px-4`}
  }
  @media (max-width: ${SM_SIZE}) {
    ${tw`pt-16 px-0 m-0`}
  }
  .slick-active {
    z-index: 999;
  }
`;

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

interface IProps {}

const MainPoster: FC<IProps> = () => {
  const { t } = useTranslation("common");
  return (
    <MainPosterWrapper>
      <Slider {...settings}>
        <PosterCard
          image="/images/poster/moment_poster.jpg"
          isMain={true}
          path="/"
          title="Share your infomation"
          desc={t("poster.moment")}
        />
        <PosterCard
          image="/images/poster/story_poster.jpg"
          isMain={true}
          path="/story"
          title="Leave and Share your memory"
          desc={t("poster.story")}
        />
        <PosterCard
          image="/images/poster/covid_poster.jpg"
          isMain={true}
          link="https://www.0404.go.kr/dev/newest_list.mofa"
          title="I trust We can get over covid-19"
          desc={t("poster.covid")}
        />
      </Slider>
    </MainPosterWrapper>
  );
};

export default MainPoster;
