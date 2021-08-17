import PosterCard from "@components/Cards/PosterCard";
import React, { FC } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { SM_SIZE, XLG_SIZE } from "config";
import tw from "twin.macro";
import { NextArrow, PrevArrow } from "@components/SliderArrow";

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
  return (
    <MainPosterWrapper>
      <Slider {...settings}>
        <PosterCard
          image="/images/poster/moment_poster.png"
          isMain={true}
          path="/"
          title="Share your infomation"
          desc="모멘트 : 여행이라는 망망대해에서 길을 잃었나요? 물어봐요! 돈드는거 아니잖아요~"
        />
        <PosterCard
          image="/images/poster/story_poster.png"
          isMain={true}
          path="/story"
          title="Leave and Share your memory"
          desc="연대기 : 당신의 여정에는 어떤 일이 있었나요?"
        />
        <PosterCard
          image="/images/poster/covid_poster.png"
          isMain={true}
          link="https://www.0404.go.kr/dev/newest_list.mofa"
          title="I trust We can get over covid-19"
          desc="해외안전여행 : 외교부에서 코로나19 입국제한 여부를 확인하세요."
        />
      </Slider>
    </MainPosterWrapper>
  );
};

export default MainPoster;
