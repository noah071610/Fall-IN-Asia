import { css } from "@emotion/react";
import React, { FC, useState } from "react";
import tw from "twin.macro";

const PosterCardWrapper = (isMain?: boolean) => css`
  ${tw`w-full`}
  ${isMain ? tw`rounded-2xl h-60` : tw`h-80`}
  background-repeat: no-repeat;
  background-position: left;
`;

interface IProps {
  isMain?: boolean;
}

const PosterCard: FC<IProps> = ({ isMain }) => {
  return (
    <div
      css={PosterCardWrapper(isMain)}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2017&q=80
      )`,
      }}
    ></div>
  );
};

export default PosterCard;
