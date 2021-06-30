import React, { FC, useState } from "react";
import { LearningSectionWrapper } from "./styles";
import Slick from "react-slick";

interface IProps {}

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const LearningSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <LearningSectionWrapper>
      <Slick {...settings}>
        <div>잉</div>
        <div>잉</div>
        <div>잉</div>
      </Slick>
    </LearningSectionWrapper>
  );
};

export default LearningSection;
