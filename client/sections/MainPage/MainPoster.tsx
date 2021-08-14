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
          image="https://user-images.githubusercontent.com/74864925/129447142-48c58d87-d5e8-46ba-9052-8d1b8e1c383e.png"
          isMain={true}
          path="/"
          title="Share your infomation"
          desc="모멘트 : 여행이라는 망망대해에서 길을 잃었나요? 물어봐요! 돈드는거 아니잖아요~"
        />
        <PosterCard
          image="https://user-images.githubusercontent.com/74864925/129446624-f357679e-af98-41f7-a9ac-4f3dc434a551.png"
          isMain={true}
          path="/story"
          title="Leave and Share your memory"
          desc="연대기 : 당신의 여정에는 어떤 일이 있었나요?"
        />
      </Slider>
    </MainPosterWrapper>
  );
};

export default MainPoster;
