import PosterCard from "@components/Cards/PosterCard";
import React, { FC } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { SM_SIZE, XLG_SIZE } from "config";
import tw from "twin.macro";

const MainPosterWrapper = styled.div`
  width: ${XLG_SIZE};
  ${tw`mx-auto rounded-2xl pt-24`}
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
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface IProps {}

const MainPoster: FC<IProps> = () => {
  return (
    <MainPosterWrapper>
      <Slider {...settings}>
        <PosterCard
          image="https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          isMain={true}
        />
        <PosterCard
          image="https://images.unsplash.com/photo-1512617835784-a92626c0a554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          isMain={true}
        />
      </Slider>
    </MainPosterWrapper>
  );
};

export default MainPoster;
