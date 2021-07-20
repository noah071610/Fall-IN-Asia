import React, { FC, useCallback, useEffect, useState } from "react";
import { MainPostWrapper } from "./styles";
import "animate.css/animate.css";
import CommentForm from "@components/CommentForm";
import MainPostTitle from "@sections/MainPage/MainPostTitle";
import Comment from "@components/Comment";
import { IMainPost } from "@typings/db";
import ReactHtmlParser from "react-html-parser";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";

interface IProps {
  mainPost: IMainPost;
}

const MainPost: FC<IProps> = ({ mainPost }) => {
  const [state, setstate] = useState();
  return (
    <MainPostWrapper>
      <MainPostTitle mainPost={mainPost} />
      <div className="post-content">{ReactHtmlParser(mainPost?.content as string)}</div>
      <ul className="post-footer">
        <li>
          <CommentOutlined />
          <span className="count">{mainPost?.comments?.length}</span>
          <span>댓글</span>
        </li>
        <li>
          <LikeOutlined />
          <span className="count">{mainPost?.likedUser?.length}</span>
          <span>좋아요</span>
        </li>
      </ul>
      <CommentForm />
      {mainPost?.comments?.map((v, i) => {
        return <Comment key={i} comment={v} />;
      })}
    </MainPostWrapper>
  );
};

export default MainPost;
