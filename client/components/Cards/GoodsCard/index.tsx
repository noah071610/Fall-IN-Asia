import { IMarketPost } from "@typings/db";
import { DEFAULT_ICON_URL, handleImgError, NO_IMAGE_URL } from "config";
import router from "next/router";
import React, { FC, memo, useCallback, useMemo, useState } from "react";
import { Divider } from "antd";
import { Wrapper } from "./styles";
interface IProps {
  marketPost: IMarketPost;
}

const GoodsCard: FC<IProps> = ({ marketPost }) => {
  const onClickCard = useCallback(() => {
    router.push(`/market/${marketPost.id}`);
  }, []);
  return (
    <Wrapper className="goods-card-wrapper" onClick={onClickCard}>
      <div className="image-wrapper">
        <img
          src={marketPost?.images?.length > 0 ? marketPost?.images[0]?.src : NO_IMAGE_URL}
          alt="goods-image"
          onError={handleImgError}
        />
      </div>
      <div className="desc-wrapper">
        <div className="desc">
          <h3>{marketPost.title}</h3>
          <ul>
            <li className="tag">{marketPost.keyword}</li>
            <li className="tag">{marketPost.area}</li>
          </ul>
          <div className="name-space">
            <img src={marketPost.user.icon ? marketPost.user.icon : DEFAULT_ICON_URL} />
            <span>{marketPost.user.name}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(GoodsCard);
