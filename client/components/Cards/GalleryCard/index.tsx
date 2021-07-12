import React, { FC, useCallback, useState } from "react";
import { IGalleryPost } from "@typings/db";
import { GalleryCardWrapper } from "./styles";
import { Image } from "antd";

interface IProps {
  galleryPost: IGalleryPost;
}

const GalleryCard: FC<IProps> = ({ galleryPost }) => {
  const previewType = {
    mask: (
      <div className="overlay">
        <h3 className="gallery-title">{galleryPost.title}</h3>
        <div className="gallery-user">
          <img src={galleryPost.user.icon} alt={galleryPost.user.name} />
          <span>{galleryPost.user.name}</span>
        </div>
      </div>
    ),
  };
  return (
    <GalleryCardWrapper className="gallery-card">
      <Image
        className="gallery-img"
        src={galleryPost.image}
        alt={galleryPost.title}
        preview={previewType}
      />
    </GalleryCardWrapper>
  );
};

export default GalleryCard;
