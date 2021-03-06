import React, { FC, memo, useCallback } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import router from "next/router";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { noRevalidate, SM_SIZE } from "config";
import { ICountry, IStory } from "@typings/db";
import ArticleColumnCard from "@components/Cards/ArticleColumnCard";
import styled from "@emotion/styled";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "@components/SliderArrow";
import { useTranslation } from "react-i18next";

const popularSlideSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const MainPopularArticleSlideWrapper = styled(Slider)`
  .slick-slide {
    padding: 0.5rem;
  }
  .more-card {
    ${tw`cursor-pointer relative  rounded-2xl`}
    height:330px;
    .more-icon {
      ${tw`absolute top-1/2 left-1/2 text-gray-300`}
      transform:translate(-50%,-50%);
      ${FLEX_STYLE("center", "center", "column")};
      .anticon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }
  @media (max-width: ${SM_SIZE}) {
    .slick-slide {
      ${tw`p-0`}
    }
  }
`;

const NoStoryWrapper = styled.div``;

interface IProps {
  country?: ICountry;
}

const MainPopularArticleSlide: FC<IProps> = ({ country }) => {
  const { t } = useTranslation("common");
  const { data: popularArticles } = useSWR<IStory[]>(
    `/story/popular?code=${country?.code || ""}`,
    fetcher,
    noRevalidate
  );
  const onClickMoreCard = useCallback(() => {
    router.push(`/story`);
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
              <span>{t("main.more")}</span>
            </div>
          </div>
        </MainPopularArticleSlideWrapper>
      ) : (
        <NoStoryWrapper>{t("main.noStory")}</NoStoryWrapper>
      )}
    </>
  );
};

export default memo(MainPopularArticleSlide);
