import React, { FC, useCallback, useState } from "react";
import { MainTopArticleSlideWrapper } from "./styles";
import { SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { PlusCircleOutlined } from "@ant-design/icons";
import ArticleCard from "@components/Cards/ArticleCard";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate } from "config";
import { IStory } from "@typings/db";

SwiperCore.use([Navigation]);
interface IProps {}

const MainTopArticleSlide: FC<IProps> = () => {
  const { data: popularArticles } = useSWR<IStory[]>("/story/popular", fetcher, noRevalidate);
  const onClickMoreCard = useCallback(() => {
    router.push(`/story`);
  }, []);
  return (
    <MainTopArticleSlideWrapper navigation={true} slidesPerView={1} freeMode={true}>
      {popularArticles?.slice(0, 3).map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <ArticleCard story={v} isMain={true} />
          </SwiperSlide>
        );
      })}
      <SwiperSlide onClick={onClickMoreCard} className="more-card">
        <div>
          <PlusCircleOutlined />
          <span>더보기</span>
        </div>
      </SwiperSlide>
    </MainTopArticleSlideWrapper>
  );
};

export default MainTopArticleSlide;
