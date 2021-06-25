import React, { FC, useState } from "react";
import {
  MainWrapper,
  NewsSection,
  GoodsExchangeSection,
  MusicChartSection,
  SupportSection,
  CommunitySection,
} from "@styles/index";
import Slider from "react-slick";
import MainNewsPosterCard from "@components/MainNewsPosterCard";
import MainNewsArticleCard from "@components/MainNewsArticleCard";
import AlbumCard from "@components/AlbumCard";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const goodsPosterSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  vertical: true,
};

const index: FC<Props> = () => {
  const [state, setstate] = useState();
  return (
    <MainWrapper>
      <GoodsExchangeSection>
        <h2>
          <span>私</span>の担当のグッズはどこ？
          <br />
          交換しよう！
        </h2>
        <div className="goods-poster-list">
          <Slider {...goodsPosterSettings}>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
            <div className="goods-list">
              <FontAwesomeIcon icon={faUser} />
              <p className="message">アイドルの写真交換します！</p>
            </div>
          </Slider>
        </div>
      </GoodsExchangeSection>
      <NewsSection>
        <div className="slider-box">
          <Slider {...settings}>
            <MainNewsPosterCard />
            <MainNewsPosterCard />
            <MainNewsPosterCard />
          </Slider>
        </div>
        <div className="article-box">
          <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200} universal={true}>
            <MainNewsArticleCard />
            <MainNewsArticleCard />
            <MainNewsArticleCard />
          </Scrollbars>
        </div>
      </NewsSection>
      <MusicChartSection>
        <div className="chart-top">
          <AlbumCard isTop={true} />
        </div>
        <div className="chart-another">
          <AlbumCard isTop={false} />
          <AlbumCard isTop={false} />
          <AlbumCard isTop={false} />
          <AlbumCard isTop={false} />
          <AlbumCard isTop={false} />
          <AlbumCard isTop={false} />
        </div>
      </MusicChartSection>
      <SupportSection>
        <div className="overlay" />
        <h1>
          <span>愛</span>を伝える簡単な方法
        </h1>
        <h3>たった広告を見ただけで全額を好きなアイドルにドネーション</h3>
      </SupportSection>
      <CommunitySection>
        <div>
          <img src="https://img.icons8.com/clouds/100/000000/edit-chat-history.png" />
          <h2>リアルタイムトーク</h2>
        </div>
        <div>
          <img src="https://img.icons8.com/clouds/100/000000/commercial.png" />
          <h2>応援メッセージ</h2>
        </div>
      </CommunitySection>
      <div style={{ height: "40rem" }}></div>
    </MainWrapper>
  );
};

export default index;
