import { css } from "@emotion/react";
import { ICountry } from "@typings/db";
import { SM_SIZE, WORLD_IMAGE } from "config";
import React, { FC, useState } from "react";
import tw from "twin.macro";

const PosterCardWrapper = (isMain?: boolean) => css`
  ${tw`w-full`}
  ${isMain ? tw`rounded-2xl h-60` : tw`h-80`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 250%;
  @media (max-width: ${SM_SIZE}) {
    ${isMain && tw`rounded-none h-40`}
  }
`;

interface IProps {
  isMain?: boolean;
  image: string;
}

const PosterCard: FC<IProps> = ({ isMain, image }) => {
  return (
    <div
      css={PosterCardWrapper(isMain)}
      style={{
        backgroundImage: `url(${image || WORLD_IMAGE}
      )`,
      }}
    ></div>
  );
};

export default PosterCard;
