import React, { FC, memo, useCallback } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { DoubleLeftOutlined, DoubleRightOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="slick-right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="slick-left-arrow" onClick={onClick} />;
}

const popularSlideSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MainPopularArticleSlideWrapper = styled(Slider)`
  .slick-slide {
    padding: 0.5rem;
  }
  .more-card {
    ${tw`cursor-pointer relative`}
    height:320px;
    .more-icon {
      ${tw`absolute top-1/2 left-1/2`}
      transform:translate(-50%,-50%);
      ${FLEX_STYLE("center", "center", "column")};
      color: ${RGB_BLACK(0.3)};
      .anticon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

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
        <MainPopularArticleSlideWrapper {...popularSlideSettings}>
          {popularArticles?.map((v, i) => {
            return <ArticleColumnCard key={i} isMain={true} story={v} />;
          })}
          <div onClick={onClickMoreCard} className="more-card">
            <div className="more-icon">
              <PlusCircleOutlined />
              <span>더보기</span>
            </div>
          </div>
        </MainPopularArticleSlideWrapper>
      ) : (
        <div>아직 {country?.name}관련 연대기가 없어요.😰</div>
      )}
    </>
  );
};

export default memo(MainPopularArticleSlide);
