import React, { FC, memo, useCallback } from "react";
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
import styled from "@emotion/styled";
import { FLEX_STYLE, RGB_BLACK } from "config";
import { Swiper } from "swiper/react";
import tw from "twin.macro";

const MainPopularArticleSlideWrapper = styled(Swiper)`
  .more-card {
    ${tw`cursor-pointer`}
    height:272px;
    ${FLEX_STYLE("center", "center")};
    div {
      ${FLEX_STYLE("center", "center", "column")};
      color: ${RGB_BLACK(0.3)};
      .anticon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

SwiperCore.use([Navigation]);
interface IProps {
  country?: ICountry;
}

const MainPopularArticleSlide: FC<IProps> = ({ country }) => {
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
        <MainPopularArticleSlideWrapper navigation={true} slidesPerView={2} spaceBetween={16}>
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
        </MainPopularArticleSlideWrapper>
      ) : (
        <div>아직 {country?.name}관련 연대기가 없어요.😰</div>
      )}
    </>
  );
};

export default memo(MainPopularArticleSlide);
