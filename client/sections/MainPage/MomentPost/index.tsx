import React, { FC, useCallback, useEffect, useState } from "react";
import { MomentPostWrapper } from "./styles";
import MomentPostTitle from "@sections/MainPage/MomentPostTitle";
import Comment from "@components/Comments/Comment";
import { IImage, IMoment } from "@typings/db";
import ReactHtmlParser from "react-html-parser";
import {
  CommentOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HeartFilled,
  HeartOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { momentDislikeAction, momentLikeAction } from "actions/moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastErrorMessage } from "config";
import { Image } from "antd";
import Slider from "react-slick";
import CommentForm from "@components/Comments/CommentForm";

interface IProps {
  moment: IMoment;
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return <DoubleRightOutlined className="slick-right-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return <DoubleLeftOutlined className="slick-left-arrow" onClick={onClick} />;
}

const momentImageSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const moment: FC<IProps> = ({ moment }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user) {
      if (user.likeMoment?.find((v: any) => v.momentId === moment?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, moment]);

  const onClickLikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(momentLikeAction(moment?.id));
  }, [user, moment]);
  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(momentDislikeAction(moment?.id));
  }, [user, moment]);

  return (
    <MomentPostWrapper>
      <MomentPostTitle moment={moment} />
      {moment?.images.length > 0 && (
        <div className="image-wrapper">
          <Image.PreviewGroup>
            <Slider {...momentImageSettings}>
              {moment?.images.map((v: IImage, i: number) => {
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
      )}
      <div className="post-content">{ReactHtmlParser(moment?.content as string)}</div>
      <ul className="post-footer">
        <li>
          <CommentOutlined />
          <span className="count">{moment?.comments?.length}</span>
          <span>댓글</span>
        </li>
        <li onClick={liked ? onClickDislikeBtn : onClickLikeBtn} className={liked ? "liked" : ""}>
          {liked ? <HeartFilled /> : <HeartOutlined />}
          <span className="count">{moment?.likedUser?.length}</span>
          <span>좋아요</span>
        </li>
      </ul>
      <CommentForm isStory={false} />
      {moment?.comments?.map((v, i) => {
        return <Comment key={i} comment={v} />;
      })}
    </MomentPostWrapper>
  );
};

export default moment;
