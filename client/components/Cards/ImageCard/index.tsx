import { ICountry } from "@typings/db";
import router from "next/router";
import React, { FC, useCallback, useState } from "react";
import { ImageCardWrapper } from "./styles";

interface IProps {
  country: ICountry;
  isMain?: boolean;
}

const ImageCard: FC<IProps> = ({ country, isMain }) => {
  const onClickArticleImageCard = useCallback(() => {
    if (isMain) {
      router.push(`/country/${country?.code}`);
    } else {
      router.push(`/story?country=${country?.code}`);
    }
  }, [isMain]);
  return (
    <ImageCardWrapper
      onClick={onClickArticleImageCard}
      style={{ backgroundImage: `url(${country.image_src})` }}
    >
      <h3>{country.name}</h3>
      <div className="overlay" />
    </ImageCardWrapper>
  );
};

export default ImageCard;
