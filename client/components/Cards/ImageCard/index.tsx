import { ICountry } from "@typings/db";
import React, { FC, useState } from "react";
import { ImageCardWrapper } from "./styles";

interface IProps {
  country: ICountry;
}

const ImageCard: FC<IProps> = ({ country }) => {
  return (
    <ImageCardWrapper style={{ backgroundImage: `url(${country.image_src})` }}>
      <h3>{country.name}</h3>
      <div className="overlay" />
    </ImageCardWrapper>
  );
};

export default ImageCard;
