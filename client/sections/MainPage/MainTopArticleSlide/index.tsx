import React, { FC, useState } from "react";
import { MainTopArticleSlideWrapper } from "./styles";
import { SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { PlusCircleOutlined } from "@ant-design/icons";
import ArticleCard from "@components/Cards/ArticleCard";

SwiperCore.use([Navigation]);
interface IProps {}

const MainTopArticleSlide: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainTopArticleSlideWrapper navigation={true} slidesPerView={1} freeMode={true}>
      <SwiperSlide>
        <ArticleCard isMain={true} />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard isMain={true} />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleCard isMain={true} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="more-card">
          <div>
            <PlusCircleOutlined />
            <span>더보기</span>
          </div>
        </div>
      </SwiperSlide>
    </MainTopArticleSlideWrapper>
  );
};

export default MainTopArticleSlide;
