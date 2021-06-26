import React, { FC, useState } from "react";
import { Wrapper } from "./styles";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { goodsPosterSettings } from "config";

interface IProps {}

const GoodsExchangeSection: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <Wrapper>
      <h2>
        <span>私</span>の推しのグッズはどこ？
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
    </Wrapper>
  );
};

export default GoodsExchangeSection;
