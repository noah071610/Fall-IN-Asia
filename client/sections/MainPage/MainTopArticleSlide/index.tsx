import React, { FC, memo, useCallback } from "react";
import { MainTopArticleSlideWrapper } from "./styles";
import { SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { PlusCircleOutlined } from "@ant-design/icons";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate } from "config";
import { ICountry, IStory } from "@typings/db";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";

SwiperCore.use([Navigation]);
interface IProps {
  country?: ICountry;
}

const MainTopArticleSlide: FC<IProps> = ({ country }) => {
  const { data: popularArticles } = useSWR<IStory[]>(
    `/story/popular?code=${country?.code || ""}`,
    fetcher,
    noRevalidate
  );
  const onClickMoreCard = useCallback(() => {
    router.push(`/story/${country?.code || ""}`);
  }, [country]);
  return (
    <>
      {popularArticles && popularArticles.length > 0 ? (
        <MainTopArticleSlideWrapper navigation={true} slidesPerView={2} spaceBetween={16}>
          {popularArticles?.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <ArticleColumnCard isMain={true} story={v} />
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
      ) : (
        <div>아직 {country?.name}관련 연대기가 없어요.😰</div>
      )}
    </>
  );
};

export default memo(MainTopArticleSlide);
