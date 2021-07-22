import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { MarketPostSectionWrapper } from "./styles";
import { Image } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "utils/fetcher";
import ReactHtmlParser from "react-html-parser";
import { DEFAULT_ICON_URL } from "config";
import ConfirmPasswordModal from "@components/Modal/ConfirmPasswordModal";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { IImages } from "@typings/db";
interface IProps {}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="slick-right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="slick-left-arrow" onClick={onClick} />;
}

const marketPostImageSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MarketPostSection: FC<IProps> = () => {
  const { query } = useRouter();
  const { data: marketPost, error } = useSWR(`/market/${query?.id}`, fetcher);
  const { user } = useSelector((state: RootState) => state.user);
  const [isUserPost, setIsUserPost] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const onClickDeleteBtn = useCallback(() => {
    setOnDelete((prev) => !prev);
  }, []);
  useEffect(() => {
    if (user?.id === marketPost?.user.id) {
      setIsUserPost(true);
    } else {
      setIsUserPost(false);
    }
  }, [user, marketPost]);
  return (
    <MarketPostSectionWrapper>
      <div className="image-wrapper">
        <Image.PreviewGroup>
          <Slider {...marketPostImageSettings}>
            {marketPost?.images.map((v: IImages, i: number) => {
              return (
                <Image
                  key={i}
                  preview={{ mask: <ZoomInOutlined /> }}
                  src={v.src}
                  alt="goods-image"
                />
              );
            })}
          </Slider>
        </Image.PreviewGroup>
      </div>
      <div className="desc">
        <div>
          <h2>{marketPost?.title}</h2>
          <ul>
            <li className="tag">{marketPost?.area}</li>
            <li className="tag">{marketPost?.keyword}</li>
          </ul>
          <div className="name-space">
            <img src={marketPost?.user.icon ? marketPost?.user.icon : DEFAULT_ICON_URL} />
            <span>{marketPost?.user.name}</span>
          </div>
        </div>
        <div className="chat">
          <div onClick={isUserPost ? onClickDeleteBtn : onClickDeleteBtn} className="chat-icon">
            <img
              src={
                isUserPost
                  ? "https://img.icons8.com/color/96/000000/delete-forever.png"
                  : "https://img.icons8.com/color/96/000000/chat--v1.png"
              }
            />
            {onDelete && (
              <ConfirmPasswordModal postId={marketPost?.id} isDelete={true} isMarketPost={true} />
            )}
          </div>
          <div className="chat-text">{isUserPost ? "ポスト削除" : "メッセージを送る"}</div>
        </div>
      </div>
      <div className="content">{ReactHtmlParser(marketPost?.content as string)}</div>
    </MarketPostSectionWrapper>
  );
};

export default memo(MarketPostSection);
