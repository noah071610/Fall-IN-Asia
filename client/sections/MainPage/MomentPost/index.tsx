import React, { FC, useCallback, useEffect, useState } from "react";
import { MomentPostWrapper } from "./styles";
import MomentPostTitle from "@sections/MainPage/MomentPostTitle";
import Comment from "@components/Comments/Comment";
import { IComment, IImage, IMoment } from "@typings/db";
import ReactHtmlParser from "react-html-parser";
import { CommentOutlined, HeartFilled, HeartOutlined, ZoomInOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import { Image } from "antd";
import Slider from "react-slick";
import CommentForm from "@components/Comments/CommentForm";
import { NextArrow, PrevArrow } from "@components/SliderArrow";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import axios from "axios";
import { getUserInfoAction } from "actions/user";

interface IProps {
  moment: IMoment;
  revalidateMoment: () => Promise<boolean>;
}

const momentImageSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const MomentPost: FC<IProps> = ({ moment, revalidateMoment }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: comments, revalidate: revalidateComments } = useSWR<IComment[]>(
    `/comment/${moment?.id}?postType=moment`,
    fetcher,
    noRevalidate
  );
  useEffect(() => {
    if (user) {
      if (user.likeMoment?.find((v: any) => v.momentId === moment?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, moment]);

  const onClickLikeOrDisLike = useCallback(
    (value: string) => {
      if (!user) {
        toastErrorMessage("로그인이 필요합니다.");
        return;
      }
      axios
        .patch(`/moment/${value}/${moment?.id}`)
        .then(() => {
          if (value === "like") {
            toastSuccessMessage("좋아요!💓");
          } else {
            toastSuccessMessage("좋아요 취소💔");
          }
          revalidateMoment();
          dispatch(getUserInfoAction());
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    },
    [user, moment]
  );

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
          <span className="count">{comments?.length}</span>
          <span>댓글</span>
        </li>
        <li
          onClick={
            liked ? () => onClickLikeOrDisLike("dislike") : () => onClickLikeOrDisLike("like")
          }
          className={liked ? "liked" : ""}
        >
          {liked ? <HeartFilled /> : <HeartOutlined />}
          <span className="count">{moment?.likedUser?.length}</span>
          <span>좋아요</span>
        </li>
      </ul>
      <CommentForm revalidateComments={revalidateComments} isStory={false} />
      {comments?.map((v, i) => {
        return <Comment revalidateComments={revalidateComments} key={i} comment={v} />;
      })}
    </MomentPostWrapper>
  );
};

export default MomentPost;
