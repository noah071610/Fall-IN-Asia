import { css } from "@emotion/react";
import { SM_SIZE, WORLD_IMAGE } from "config";
import router from "next/router";
import React, { FC, useCallback } from "react";
import tw from "twin.macro";

const PosterCardWrapper = (isMain?: boolean) => css`
  ${tw`w-full relative overflow-hidden cursor-pointer`}
  ${isMain ? tw`rounded-2xl h-60` : tw`h-80`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  .poster-content {
    ${tw`absolute z-10 bottom-6 left-8 pr-8`}
    h1 {
      ${tw`text-white mb-4 text-5xl`}
      font-family: 'Shadows Into Light', cursive;
    }
    p {
      ${tw`text-white`}
    }
  }
  .poster-overlay {
    ${tw`w-full h-full absolute top-0 left-0`}
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 32%, rgba(23, 21, 21, 0) 48%);
  }
  @media (max-width: ${SM_SIZE}) {
    ${isMain ? tw`rounded-none h-60` : tw`h-48`}

    .poster-content {
      ${tw`bottom-8 left-4`}
      h1 {
        ${tw`text-3xl mb-2`}
      }
    }
  }
`;

interface IProps {
  isMain?: boolean;
  image: string;
  title: string;
  desc: string;
  link?: string;
  path?: string;
}

const PosterCard: FC<IProps> = ({ isMain, image, title, desc, link, path }) => {
  const onClickPoster = useCallback(() => {
    if (path) {
      router.push(path);
    }
  }, [path]);
  return (
    <div
      onClick={onClickPoster}
      css={PosterCardWrapper(isMain)}
      style={{
        backgroundImage: `url(${image || WORLD_IMAGE}
      )`,
      }}
    >
      <div className="poster-content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="poster-overlay" />
    </div>
  );
};

export default PosterCard;
