import React, { FC, useCallback, useEffect, useState } from "react";
import { MainPostWrapper } from "./styles";
import CommentForm from "@components/CommentForm";
import MainPostTitle from "@sections/MainPage/MainPostTitle";
import Comment from "@components/Comment";
import { IImage, IMainPost } from "@typings/db";
import ReactHtmlParser from "react-html-parser";
import {
  CommentOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HeartFilled,
  HeartOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { mainPostDislikeAction, mainPostLikeAction } from "actions/mainPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastErrorMessage } from "config";
import { Image } from "antd";
import Slider from "react-slick";

interface IProps {
  mainPost: IMainPost;
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="slick-right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="slick-left-arrow" onClick={onClick} />;
}

const mainPostImageSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const MainPost: FC<IProps> = ({ mainPost }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user) {
      if (user.likeMainPost?.find((v: any) => v.mainPostId === mainPost?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, mainPost]);

  const onClickLikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(mainPostLikeAction(mainPost?.id));
  }, [user, mainPost]);
  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(mainPostDislikeAction(mainPost?.id));
  }, [user, mainPost]);
  console.log(mainPost);

  return (
    <MainPostWrapper>
      <MainPostTitle mainPost={mainPost} />
      <div className="image-wrapper">
        <Image.PreviewGroup>
          <Slider {...mainPostImageSettings}>
            {mainPost?.images.map((v: IImage, i: number) => {
              return (
                <Image
                  key={i}
                  preview={{ mask: <ZoomInOutlined /> }}
                  src={v.image_src}
                  alt="goods-image"
                />
              );
            })}
          </Slider>
        </Image.PreviewGroup>
      </div>
      <div className="post-content">{ReactHtmlParser(mainPost?.content as string)}</div>
      <ul className="post-footer">
        <li>
          <CommentOutlined />
          <span className="count">{mainPost?.comments?.length}</span>
          <span>댓글</span>
        </li>
        {liked ? (
          <li onClick={onClickDislikeBtn} className="liked">
            <HeartFilled />
            <span className="count">{mainPost?.likedUser?.length}</span>
            <span>좋아요</span>
          </li>
        ) : (
          <li onClick={onClickLikeBtn}>
            <HeartOutlined />
            <span className="count">{mainPost?.likedUser?.length}</span>
            <span>좋아요</span>
          </li>
        )}
      </ul>
      <CommentForm />
      {mainPost?.comments?.map((v, i) => {
        return <Comment key={i} comment={v} />;
      })}
    </MainPostWrapper>
  );
};

export default MainPost;
