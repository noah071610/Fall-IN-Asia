import React, { FC, useState } from "react";
import { MainTopContentWrapper } from "./styles";
import { SwiperSlide, Swiper } from "swiper/react";
import BoxCard from "@components/Cards/BoxCard";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { PlusCircleOutlined } from "@ant-design/icons";

SwiperCore.use([Navigation]);
interface IProps {}

const MainTopContent: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainTopContentWrapper>
      <Swiper
        className="box-card-wrapper"
        navigation={true}
        slidesPerView={2}
        spaceBetween={16}
        freeMode={true}
      >
        <SwiperSlide>
          <BoxCard />
        </SwiperSlide>
        <SwiperSlide>
          <BoxCard />
        </SwiperSlide>
        <SwiperSlide>
          <BoxCard />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="more-card">
            <div>
              <PlusCircleOutlined />
              <span>더보기</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </MainTopContentWrapper>
  );
};

export default MainTopContent;
