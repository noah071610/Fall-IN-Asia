import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { ICountry, IMainPost } from "@typings/db";
import { DEFAULT_ICON_URL } from "config";
import React, { FC, useState } from "react";
import { ArticleCardWrapper } from "./styles";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import ReactHtmlParser from "react-html-parser";
import { toastErrorMessage } from "config";
import router from "next/router";

interface IProps {
  mainPost: IMainPost;
}

const ArticleCard: FC<IProps> = ({ mainPost }) => {
  const {
    data: country,
    error,
    revalidate,
  } = useSWR<ICountry, any>(`/country/${mainPost?.code}`, fetcher);
  if (error) {
    toastErrorMessage("가져오지 못했습니다.");
  }
  return (
    <ArticleCardWrapper>
      <div className="article-top">
        <NameSpace user={mainPost?.user} date={mainPost?.createdAt} />
        <h4 className="article-header">
          {country?.name}/{mainPost?.type}/{mainPost?.id}번째메아리
        </h4>
      </div>
      <div className="article">
        <div
          onClick={() => router.push(`/post/${country?.code}/${mainPost?.id}`)}
          className="content"
        >
          {ReactHtmlParser(mainPost?.content as string)}
        </div>
        <div className="image-list"></div>
        <ul className="article-footer">
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
      </div>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
