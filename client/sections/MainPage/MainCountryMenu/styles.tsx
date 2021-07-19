import styled from "@emotion/styled";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { FLEX_STYLE, GRAY_COLOR } from "config";

export const MainCountryMenuWrapper = styled(Swiper)`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  padding: 0.5rem;
  margin-top: 1rem;
  .country-list {
    width: 100%;
    border-radius: 15px;
    padding: 0.5rem;
    cursor: pointer;
    margin: 0;
    ${FLEX_STYLE("center", "center")};
    img {
      border-radius: 5px;
      width: 2.2rem;
      height: 1.5rem;
    }
    span {
      font-size: 1rem;
      margin-left: 0.8rem;
    }
    &:hover {
      background: ${GRAY_COLOR};
    }
  }
`;
