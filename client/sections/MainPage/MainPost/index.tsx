import React, { FC, useCallback, useEffect, useState } from "react";
import { MainPostWrapper } from "./styles";
import { Divider } from "antd";
import { IClubPost } from "@typings/db";
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import "animate.css/animate.css";
import { clubPostDislikeAction, clubPostLikeAction } from "actions/club";
import CommentForm from "@components/CommentForm";
import ClubPostTitle from "@sections/ClubPostPage/ClubPostTitle";
import Comment from "@components/Comment";
interface IProps {}

const MainPost: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <MainPostWrapper>
      <ClubPostTitle />
      <div className="post-content">안녕안녕</div>
      <CommentForm />
      <Comment />
      <Comment />
      <Comment />
    </MainPostWrapper>
  );
};

export default MainPost;
